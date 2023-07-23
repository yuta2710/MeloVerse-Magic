import express from "express";
import colors from "colors";
import * as dotenv from "dotenv";
import cors from "cors";
import http from "http";
// import env from "./types/env";

const app = express();

// Load environment variables from the .env file
dotenv.config({ path: __dirname + "/.env" });

app.use(express.json());

app.use(
  cors({
    credentials: true,
  })
);

const server = http.createServer(app);

console.log(process.env.PORT);

server.listen(process.env.PORT || 5000, () => {
  console.log(
    colors.yellow.bold(
      `Server running on http://localhost:${process.env.PORT || 5000}`
    )
  );
});
