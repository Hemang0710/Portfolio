const Click = require('../models/Click');
const Link = require('../models/Link');

// @desc    Get analytics for a link
// @route   GET /api/links/:id/analytics
// @access  Public
const getAnalytics = async (req, res) => {
  try {
    const link = await Link.findById(req.params.id);

    if (!link) {
      return res.status(404).json({ message: 'Link not found' });
    }

    const clicks = await Click.find({ link: link._id }).sort({ createdAt: -1 });

    // Aggregate statistics
    const stats = {
      totalClicks: clicks.length,
      uniqueClicks: new Set(clicks.map((c) => c.ipAddress)).size,
      devices: {},
      browsers: {},
      referrers: {},
      clicksByDate: {},
    };

    clicks.forEach((click) => {
      // Device stats
      const device = click.device || 'Desktop';
      stats.devices[device] = (stats.devices[device] || 0) + 1;

      // Browser stats
      const browser = click.browser || 'Unknown';
      stats.browsers[browser] = (stats.browsers[browser] || 0) + 1;

      // Referrer stats
      const referrer = click.referrer || 'Direct';
      stats.referrers[referrer] = (stats.referrers[referrer] || 0) + 1;

      // Clicks by date
      const date = click.createdAt.toISOString().split('T')[0];
      stats.clicksByDate[date] = (stats.clicksByDate[date] || 0) + 1;
    });

    res.json({
      link: {
        ...link.toObject(),
        shortUrl: `${process.env.BASE_URL}/${link.shortId}`,
      },
      stats,
      recentClicks: clicks.slice(0, 10),
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getAnalytics };
