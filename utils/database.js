import mongoose from "mongoose";

let isConneted = false;

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  if (isConneted) {
    console.log("Database connection is already established");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGO_URI, {
      dbName: "share_prompt",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    isConneted = true;
    console.log("Database connection established");
  } catch (error) {
    console.log(error);
  }
};
