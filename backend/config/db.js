const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    console.log("Trying to connect...");
    console.log(process.env.MONGO_URI);

    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB Connected");
  } catch (error) {
    console.error("FULL ERROR:");
    console.error(error);
  }
};

module.exports = connectDB;