// src/models/User.js
// Starter User schema. Designed to be extended later with fields like
// password (for JWT auth), role (for RBAC), refreshTokens, etc.,
// without breaking existing functionality.

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
      trim: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, 'Please provide a valid email address'],
    },

    // -----------------------------------------------------------------
    // Reserved fields for future features (kept commented so the schema
    // stays simple now, but the shape is documented for future devs).
    // -----------------------------------------------------------------
    // password: { type: String, select: false },               // JWT auth
    // role: { type: String, enum: ['admin', 'member'], default: 'member' }, // RBAC
    // refreshTokens: [{ type: String }],                        // Refresh tokens
    // team: { type: mongoose.Schema.Types.ObjectId, ref: 'Team' }, // Team management
  },
  {
    // Automatically manages createdAt and updatedAt fields
    timestamps: true,
  }
);

module.exports = mongoose.model('User', userSchema);
