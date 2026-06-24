// src/models/Meeting.js
// Starter Meeting schema. Designed to be extended later with fields like
// host, participants, startTime/endTime, summary (AI-generated), tasks, etc.,
// without breaking existing functionality.

const mongoose = require('mongoose');

const meetingSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Meeting title is required'],
      trim: true,
    },
    description: {
      type: String,
      trim: true,
      default: '',
    },

    // -----------------------------------------------------------------
    // Reserved fields for future features (kept commented so the schema
    // stays simple now, but the shape is documented for future devs).
    // -----------------------------------------------------------------
    // host: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    // participants: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    // startTime: { type: Date },
    // endTime: { type: Date },
    // roomId: { type: String },                 // Socket.io / WebRTC room identifier
    // summary: { type: String },                 // OpenAI-generated meeting summary
    // tasks: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Task' }], // Task management
  },
  {
    // Automatically manages createdAt and updatedAt fields
    timestamps: true,
  }
);

module.exports = mongoose.model('Meeting', meetingSchema);
