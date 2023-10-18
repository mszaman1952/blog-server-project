import mongoose from "mongoose";
import app from "./app.js";
import dotenv from "dotenv";
dotenv.config();

const port = process.env.PORT || 8000;
const DATABASE_URL = process.env.DB_URL;


async function main(){
    try {
      await mongoose.connect(DATABASE_URL)
      console.log("Database is Connected");
      app.listen(port, () => {
      console.log(`Server is Running Successfully at http://localhost:${port}`);  
      });
    } catch (error) {
        console.log("Failed", error)
    }
}

main();

