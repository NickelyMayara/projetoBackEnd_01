import express from "express";
import { getBooks } from "../controllers/bookControllers.js";

const router = express.Router()

router.get("/", getBooks)

export default router;