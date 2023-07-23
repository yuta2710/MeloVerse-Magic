import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import cors from "cors";

const app = express();

app.use(express.json());

app.use(cors());

