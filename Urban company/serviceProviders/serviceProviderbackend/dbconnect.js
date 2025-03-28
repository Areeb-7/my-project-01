import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const MONGO_URI = 'mongodb://localhost:27017/Urban'; // Replace with your MongoDB URI
    const conn = await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1); // Exit process with failure
  }
};

export default connectDB;
