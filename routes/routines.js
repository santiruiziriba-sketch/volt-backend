import { Router } from 'express';

import {
  getRoutines,
  createRoutine,
  deleteRoutine,
} from '../controllers/routines.js';

import auth from '../middlewares/auth.js';

import {
  validateRoutine,
  validateRoutineId,
} from '../middlewares/validation.js';

const router = Router();

router.get('/', auth, getRoutines);

router.post('/', auth, validateRoutine, createRoutine);

router.delete('/:routineId', auth, validateRoutineId, deleteRoutine);

export default router;
