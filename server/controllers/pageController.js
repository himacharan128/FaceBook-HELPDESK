const Page = require('../models/Page');

const createPage = async (req, res) => {
  const { pageId } = req.body;
  const userId = req.user.id;

  try {
    let page = await Page.findOne({ userId, pageId });

    if (page) {
      return res.status(400).json({ msg: 'Page already connected' });
    }

    page = new Page({
      userId,
      pageId,
    });

    await page.save();

    res.json({ msg: 'Page connected successfully' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

const deletePage = async (req, res) => {
  const userId = req.user.id;
  const pageId = req.params.pageId;

  try {
    let page = await Page.findOne({ userId, pageId });

    if (!page) {
      return res.status(400).json({ msg: 'Page not found' });
    }

    await Page.findByIdAndRemove(page.id);

    res.json({ msg: 'Page disconnected successfully' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

module.exports = { createPage, deletePage };
