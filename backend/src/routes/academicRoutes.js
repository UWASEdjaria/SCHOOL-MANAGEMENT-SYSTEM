import express from 'express';
import { getGrades, getAttendance } from '../controllers/academicController.js';
import { protect } from '../middlewares/auth.js';

const router = express.Router();

router.get('/grades', protect, getGrades);
router.get('/attendance', protect, getAttendance);

export default router;
