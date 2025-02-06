import mongoose from "mongoose";
import { IPoll } from "../types/pollTypes";


//creating schema 
const pollSchema = new mongoose.Schema <IPoll>({
    question: { type: String, required: true},
    options: { type: [String], required: true},
    votes: {type: [Number], required: true}
},{timestamps: true})


const Poll = mongoose.model<IPoll>("Poll",pollSchema)

export default Poll


