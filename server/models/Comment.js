const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  seq : Number,
  contents: String,
  author: String,
  comment_date: { type: Date, default: Date.now() }
});

const Comment = mongoose.model('comment', commentSchema);
module.exports = { Comment };