const Link = require('../models/Link');
const Click = require('../models/Click');
const generateShortId = require('../utils/generateShortId');
const UAParser = require('ua-parser-js');

// @desc    Create a new short link
// @route   POST /api/links
// @access  Public
const createLink = async (req, res) => {
  try {
    const { originalUrl, customAlias, password, expiresAt } = req.body;

    let shortId = generateShortId(customAlias);

    // Check if custom alias already exists
    if (customAlias) {
      const existingLink = await Link.findOne({ shortId });
      if (existingLink) {
        return res.status(400).json({ message: 'Custom alias already exists' });
      }
    } else {
      // Check if generated ID exists, regenerate if needed
      let exists = await Link.findOne({ shortId });
      while (exists) {
        shortId = generateShortId();
        exists = await Link.findOne({ shortId });
      }
    }

    const link = await Link.create({
      originalUrl,
      shortId,
      customAlias: customAlias || null,
      password: password || null,
      expiresAt: expiresAt ? new Date(expiresAt) : null,
    });

    res.status(201).json({
      ...link.toObject(),
      shortUrl: `${process.env.BASE_URL}/${link.shortId}`,
    });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({ message: 'Short ID already exists' });
    }
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get all links
// @route   GET /api/links
// @access  Public
const getLinks = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const links = await Link.find({ isActive: true })
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    const total = await Link.countDocuments({ isActive: true });

    res.json({
      links: links.map((link) => ({
        ...link.toObject(),
        shortUrl: `${process.env.BASE_URL}/${link.shortId}`,
      })),
      totalPages: Math.ceil(total / limit),
      currentPage: page,
      total,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get a single link
// @route   GET /api/links/:id
// @access  Public
const getLink = async (req, res) => {
  try {
    const link = await Link.findById(req.params.id);

    if (!link) {
      return res.status(404).json({ message: 'Link not found' });
    }

    res.json({
      ...link.toObject(),
      shortUrl: `${process.env.BASE_URL}/${link.shortId}`,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Redirect to original URL
// @route   GET /:shortId
// @access  Public
const redirectLink = async (req, res) => {
  try {
    const { shortId } = req.params;

    const link = await Link.findOne({ shortId, isActive: true });

    if (!link) {
      return res.status(404).json({ message: 'Link not found' });
    }

    // Check if link has expired
    if (link.expiresAt && new Date() > link.expiresAt) {
      return res.status(410).json({ message: 'Link has expired' });
    }

    // Check password if required
    if (link.password && req.query.password !== link.password) {
      return res.status(401).json({ message: 'Password required' });
    }

    // Track click
    const parser = new UAParser(req.headers['user-agent']);
    const click = await Click.create({
      link: link._id,
      ipAddress: req.ip || req.connection.remoteAddress,
      referrer: req.headers.referer || 'Direct',
      userAgent: req.headers['user-agent'],
      device: parser.getDevice().type || 'Desktop',
      browser: parser.getBrowser().name || 'Unknown',
      os: parser.getOS().name || 'Unknown',
    });

    // Update click count
    link.clickCount += 1;
    await link.save();

    // Redirect to original URL
    res.redirect(link.originalUrl);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Update a link
// @route   PUT /api/links/:id
// @access  Public
const updateLink = async (req, res) => {
  try {
    const link = await Link.findById(req.params.id);

    if (!link) {
      return res.status(404).json({ message: 'Link not found' });
    }

    const updatedLink = await Link.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    res.json({
      ...updatedLink.toObject(),
      shortUrl: `${process.env.BASE_URL}/${updatedLink.shortId}`,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Delete a link
// @route   DELETE /api/links/:id
// @access  Public
const deleteLink = async (req, res) => {
  try {
    const link = await Link.findById(req.params.id);

    if (!link) {
      return res.status(404).json({ message: 'Link not found' });
    }

    // Soft delete
    link.isActive = false;
    await link.save();

    res.json({ message: 'Link deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createLink,
  getLinks,
  getLink,
  redirectLink,
  updateLink,
  deleteLink,
};
