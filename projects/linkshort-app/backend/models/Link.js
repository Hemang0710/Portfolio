const mongoose = require('mongoose');

const linkSchema = new mongoose.Schema(
  {
    originalUrl: {
      type: String,
      required: [true, 'Please provide an original URL'],
      trim: true,
    },
    shortId: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
    customAlias: {
      type: String,
      trim: true,
    },
    password: {
      type: String,
      select: false,
    },
    expiresAt: {
      type: Date,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    clickCount: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

// Index for faster lookups
linkSchema.index({ shortId: 1 });
linkSchema.index({ expiresAt: 1 });

module.exports = mongoose.model('Link', linkSchema);
