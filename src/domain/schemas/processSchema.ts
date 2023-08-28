import mongoose from "mongoose";
import { Process } from "../entities/Process";

const processsSchema = new mongoose.Schema<Process>(
  
)

export default mongoose.model('Process', processsSchema);