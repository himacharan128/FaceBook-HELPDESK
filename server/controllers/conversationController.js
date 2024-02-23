const Conversation = require('../models/Conversation');

const getConversations = async (req, res) => {
  const userId = req.user.id;

  try {
    const conversations = await Conversation.find({ userId }).populate('pageId');
    res.json(conversations);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

const replyToMessage = async (req, res) => {
  const { pageId, sender, text } = req.body;
  const userId = req.user.id;

  try {
    let conversation = await Conversation.findOne({ userId, pageId });

    if (!conversation) {
      conversation = new Conversation({
        userId,
        pageId,
        messages: [{ sender, text }],
      });

      await conversation.save();
    } else {
      conversation.messages.push({ sender, text });
      await conversation.save();
    }

    res.json({ msg: 'Message sent successfully' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

module.exports = { getConversations, replyToMessage };
