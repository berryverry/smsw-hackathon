const express = require("express");
const app = express();
const port = 5000;
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const { User } = require("./src/User");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose
  .connect(
    'mongodb+srv://dbUser:1234@cluster0.yqr76ae.mongodb.net/?retryWrites=true&w=majority',
    {
      //useNewUrlPaser: true,
      //useUnifiedTofology: true,
     // useCreateIndex: true,
      //useFindAndModify: false,
    }
  )
  .then(() => console.log('MongoDB connected'))
  .catch((err) => {
    console.log(err);
  });

app.get("/", (request,response)=>{
  response.send("성공입니다.");});

app.post("/register", (req, res) => {
  const user = new User(req.body);
  user.save((err, userInfo) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({ success: true });
  });
});

app.post("/login", (req, res) => {
  User.findOne({ email: req.body.email }, (err, user) => {
    if (err) {
      return res.json({
        loginSuccess: false,
        message: "존재하지 않는 아이디입니다.",
      });
    }
    user
      .comparePassword(req.body.password)
      .then((isMatch) => {
        if (!isMatch) {
          return res.json({
            loginSuccess: false,
            message: "비밀번호가 일치하지 않습니다",
          });
        }

        user
          .generateToken()
          .then((user) => {
            res
              .cookie("x_auth", user.token)
              .status(200)
              .json({ loginSuccess: true, userId: user._id });
          })
          .catch((err) => {
            res.status(400).send(err);
          });
      })
      .catch((err) => res.json({ loginSuccess: false, err }));

  });

});

app.listen(port, () => console.log(`listening on port ${port}`));