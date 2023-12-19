const mongoose = require('mongoose');

const connectDB = async () => {
    try {
      await mongoose.connect(
        `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.l4ybpeb.mongodb.net/${process.env.DB_NAME}`,
        {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        }
      );
  
      console.log("MongoDB connected");
    } catch (error) {
      console.error(error.message);
      process.exit(1);
    }
  };

module.exports = connectDB;