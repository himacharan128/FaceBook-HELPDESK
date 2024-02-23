const mongoose = require('mongoose');

const pageSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  pageId: {
    type: String,
    required: true,
  },
});

const Page = mongoose.model('Page', pageSchema);

module.exports = Page;
