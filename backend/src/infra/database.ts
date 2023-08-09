import mongoose from "mongoose"
import "dotenv/config"

export async function connectDb(){
  try{
    await mongoose.connect(process.env.NODE_MONGO_URL as string);
  } catch (error) {
    console.log(`Error in connection ${error}`)
  }
}