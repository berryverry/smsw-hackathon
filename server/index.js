const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');
const mongoose = require('mongoose');
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}
const { User } = require('./models/User');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({ credentials: true, origin: `${process.env.CLIENT_DOMAIN}` }));

mongoose
  .connect(`${process.env.MONGO_URI}`, {
    //useNewUrlPaser: true,
    //useUnifiedTofology: true,
    // useCreateIndex: true,
    //useFindAndModify: false,
  })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => {
    console.log(err);
  });

app.get('/', (request, response) => {
  response.send('성공입니다.');
});

app.post('/register', (req, res) => {
  const user = new User(req.body);
  user.save((err, userInfo) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({ success: true });
  });
});

app.post('/login', (req, res) => {
  User.findOne({ email: req.body.email }, (err, user) => {
    if (err) {
      return res.status(400).json({
        loginSuccess: false,
        message: '존재하지 않는 아이디입니다.',
      });
    }
    user
      .comparePassword(req.body.password)
      .then((isMatch) => {
        if (!isMatch) {
          return res.status(400).json({
            loginSuccess: false,
            message: '비밀번호가 일치하지 않습니다',
          });
        }

        user
          .generateToken()
          .then((user) => {
            res
              .cookie('x_auth', user.token, {
                httpOnly: true,
                maxAge: 24 * 60 * 60 * 1000, // 1 day,
                sameSite: 'none',
                secure: process.env.NODE_ENV === 'production',
              })
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
