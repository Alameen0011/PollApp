import {Document} from "mongoose";

export interface IPoll extends Document {
  id: string; //unique id for poll
  question: string; // the question asked in the poll
  options: string[]; // an array of options for the poll
  votes: number[]; // an array of count of votes corresponding to each option
}
