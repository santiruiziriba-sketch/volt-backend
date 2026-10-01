import { Router } from "express";
import {
  getRoutines,
  createRoutine,
  deleteRoutine,
} from "../controllers/routines.js";
import auth from "../middlewares/auth.js";
import { validateRoutineId } from "../middlewares/validation.js";

const router = Router();

router.get("/", auth, getRoutines);
router.post("/", auth, createRoutine);
router.delete("/:routineId", auth, validateRoutineId, deleteRoutine);

export default router;
