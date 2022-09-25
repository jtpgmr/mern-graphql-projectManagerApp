import mongoose from "mongoose";

const connectDB = async () => {
  const connect = await mongoose.connect(process.env.CONNECTION_URL);

  console.log(`MongoDB Connected: ${connect.connection.host}`.bgBlue);
};

export default connectDB;
