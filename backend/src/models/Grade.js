import mongoose from 'mongoose';

const gradeSchema = new mongoose.Schema({
  studentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Student', required: true },
  subject: { type: String, required: true },
  score: { type: Number, required: true },
  term: String,
  year: Number
}, { timestamps: true });

export default mongoose.model('Grade', gradeSchema);
