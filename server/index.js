const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const authMiddleware = require('./authmiddleware');
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}
const { User } = require('./models/User');
const { Board } = require('./models/Board');
const { Comment } = require('./models/Comment');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(cors({ credentials: true, origin: `${process.env.CLIENT_DOMAIN}` }));
app.use('/board', authMiddleware);
app.use('/comment', authMiddleware);
app.use('/profile', authMiddleware);
app.use('/quiz', authMiddleware);
app.use('/user', authMiddleware);

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

app.get('/user', async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.tokenInfo });
    const { password, ...data } = await user.toJSON();

    return res.send(data);
  } catch (err) {
    return res.status(401).send({
      message: 'unauthenticated',
    });
  }
});

app.post('/logout', (req, res) => {
  return res.cookie('x_auth', '').json({ logoutSuccess: true });
});

//게시글 작성
app.post('/board/write', function (req, res) {
  let board = new Board();
  board.title = req.body.title;
  board.contents = req.body.contents;
  board.author = req.body.author;

  board.save(function (err) {
    if (err) {
      console.log(err);
      res.redirect('/');
    }
    res.redirect('/');
  });
});

//게시글 리스트 보기
app.get('/board/list', function (req, res) {
  let posts = Board.find(function (err, posts) {
    if (err) {
      return res.status(400).json({
        boardListSuccess: false,
        message: '게시글 검색에 실패하였습니다.',
      });
    }
    return res.status(200).json({ posts });
  });
});

//seq로 게시글 상세보기
app.get('/board/:seq', function (req, res) {
  Board.findOne({ seq: req.params.seq }, function (err, board) {
    if (err) {
      return res.status(400).json({
        boardSuccess: false,
        message: '존재하지 않는 글입니다.',
      });
    }
    return res.status(200).json({ board });
  });
});

//댓글 작성
app.post('/comment/:seq/write', function (req, res) {
  const comment = new Comment();
  comment.contents = req.body.contents;
  comment.author = req.body.author;

  Board.findOneAndUpdate(
    { seq: req.params.seq },
    { $push: { comments: comment } },
    function (err, board) {
      if (err) {
        console.log(err);
        res.redirect('/');
      }
      res.redirect('/board/' + req.params.seq);
    },
  );
});

app.listen(port, () => console.log(`listening on port ${port}`));
