const mongoose = require('mongoose');

const clickSchema = new mongoose.Schema(
  {
    link: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Link',
      index: true,
    },
    ipAddress: {
      type: String,
    },
    referrer: {
      type: String,
    },
    userAgent: {
      type: String,
    },
    device: {
      type: String,
    },
    browser: {
      type: String,
    },
    os: {
      type: String,
    },
    country: {
      type: String,
    },
    city: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

// Index for analytics queries
clickSchema.index({ link: 1, createdAt: -1 });
clickSchema.index({ createdAt: -1 });

module.exports = mongoose.model('Click', clickSchema);
