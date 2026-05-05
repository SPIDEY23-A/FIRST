const model = require('../models/urlModel');
const nanoid = require('nanoid');
const createUrl = async (req, res) => {
  try {
    const { actualUrl } = req.body;
    const shorturl = nanoid.nanoid(8);
    const newUrl = new model({ shorturl, actualUrl });
    await newUrl.save();
    res.status(201).json({ shorturl });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create short URL' });
  }
};
const redirectUrl = async (req, res) => {
  try {
    const { shorturl } = req.params;
    const urlEntry = await model.findOne
({ shorturl });
    if (urlEntry) {
      res.redirect(urlEntry.actualUrl);
    } else {
      res.status(404).json({ error: 'Short URL not found' });
    }   
    } catch (error) {
    res.status(500).json({ error: 'Failed to redirect' });
    }   
};
module.exports = { createUrl, redirectUrl };
