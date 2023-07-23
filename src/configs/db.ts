// import colors from "colors";
// import mongoose from "mongoose";
// import dotenv from "dotenv";

// // dotenv.config({ path: "./config.env" });
// dotenv.config();

// export default async function connectDB() {
//   console.log("MONGO_URI:", process.env.MONGO_URI);
//   try {
//     if (!process.env.MONGO_URI) {
//       throw new Error(
//         "MongoDB connection URI not found in environment variables."
//       );
//     }

//     const conn = await mongoose.connect(process.env.MONGO_URI);

//     console.log(
//       colors.cyan.underline.bold(`MongoDB Connected: ${conn.connection.host}`)
//     );
//   } catch (error) {
//     console.error(colors.red.bold("MongoDB Connection Error:"), error.message);
//     process.exit(1); // Exit the process with a failure status
//   }
// }
