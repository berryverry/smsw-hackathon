const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const autoIncrement = require('mongoose-auto-increment');
const connection = mongoose.createConnection(`${process.env.MONGO_URI}`);
autoIncrement.initialize(connection);

const commentSchema = new Schema({
  seq: Number,
  contents: String,
  author: String,
  comment_date: { type: Date, default: Date.now() },
});
const boardSchema = new Schema({
  seq: Number,
  title: String,
  contents: String,
  author: String,
  board_date: { type: Date, default: Date.now() },
  comments: [commentSchema],
});

boardSchema.plugin(autoIncrement.plugin, {
  model: 'boardModel',
  field: 'seq',
  startAt: 1, //시작
  increment: 1, // 증가
});

const Board = mongoose.model('board', boardSchema);
module.exports = { Board };
