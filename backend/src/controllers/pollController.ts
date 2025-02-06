import { NextFunction, Request, Response } from 'express';
import { IPoll } from "../types/pollTypes";
import Poll from '../models/pollModel';


export const getPolls = async (req:Request, res:Response,next:NextFunction) => {
  try {
    const polls: IPoll[] = await Poll.find();
    return res.status(200).json({
      success: true,
      data: polls,
      message: "Polls fetched successfully",
    });
  } catch (error) {
    console.log("Error fetching polls:", error);
    return res.status(500).json({
      success: false,
      data: null,
      message: "Error fetching polls",
    });
  }
};

export const createPoll = async (req: Request, res: Response, next:NextFunction) => {
//   const { question, options }: { question: string; options: string[] } =
//     req.body;

//   //validating the inputs
//   if (!question || !options || options.length == 0) {
//     return res.status(400).json({
//       success: false,
//       message: "Question and options are required",
//     });
//   }

//   const newPoll: IPoll = new Poll({
//     question,
//     options,
//     votes: new Array(options.length).fill(0),
//   });

//   try {
//     const savedPoll = await newPoll.save();
//     res.status(201).json({
//       success: true,
//       data: savedPoll,
//       message: "poll created successfully",
//     });
//   } catch (error) {
//     console.log("Error while creating polls", error);
//     return res.status(500).json({
//       success: false,
//       message: "Error while creating polls",
//     });
//   }
};

export const vote = async (req: Request, res: Response, next:NextFunction) => {
  try {
    //write the logic here
    return res.json("sorry")
  } catch (error) {
    console.log(error);
  }
};
