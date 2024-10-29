import express from "express";
import {
  createMovie,
  getMovies,
  updateMovie,
  deleteMovie,
} from "../controllers/movieController.js";

const router = express.Router();

router.post("/", createMovie);
router.get("/", getMovies);
router.put("/:id", updateMovie);
router.delete("/:id", deleteMovie);

export const movieRoutes = router;
