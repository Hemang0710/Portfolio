const express = require('express');
const router = express.Router();
const {
  createLink,
  getLinks,
  getLink,
  updateLink,
  deleteLink,
} = require('../controllers/linkController');
const { getAnalytics } = require('../controllers/analyticsController');
const { validateUrl } = require('../middleware/validation');

router.post('/', validateUrl, createLink);
router.get('/', getLinks);
router.get('/:id', getLink);
router.get('/:id/analytics', getAnalytics);
router.put('/:id', updateLink);
router.delete('/:id', deleteLink);

module.exports = router;
