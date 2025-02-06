import { NextFunction, Request, Response } from 'express';
import { IPoll } from "../types/pollTypes";
import Poll from '../models/pollModel';


export const getPolls = async ( req: Request, res: Response, next: NextFunction ): Promise<void> => {
  try {
    const polls: IPoll[] = await Poll.find();

    if (!polls.length) {
      res.status(404).json({
        success: false,
        data: null,
        message: "No polls found",
      });
      return; 
    }

    res.status(200).json({
      success: true,
      data: polls,
      message: "Polls fetched successfully",
    });

    return; 
  } catch (error) {
    console.error("Error fetching polls:", error);

    res.status(500).json({
      success: false,
      data: null,
      message: "Error fetching polls",
    });

    return; 
  }
}

export const createPoll = async (req: Request, res: Response, next:NextFunction): Promise<void> => {
  const { question, options }: { question: string; options: string[] } =
    req.body;

  //validating the inputs
  if (!question || !options || options.length == 0) {
     res.status(400).json({
      success: false,
      message: "Question and options are required",
    });
       return;
  }

  const newPoll: IPoll = new Poll({
    question,
    options,
    votes: new Array(options.length).fill(0),
  });

  try {
    const savedPoll = await newPoll.save();
    res.status(201).json({
      success: true,
      data: savedPoll,
      message: "poll created successfully",
    });
  } catch (error) {
    console.log("Error while creating polls", error);
     res.status(500).json({
      success: false,
      message: "Error while creating polls",
    });
   return 
  }
};

export const vote = async (req: Request, res: Response, next:NextFunction): Promise<void> => {

  const {pollId,optionIndex,userId} : {pollId: string,optionIndex: number,userId:string}  = req.body


  //validating input
  if(!pollId || optionIndex === undefined || !userId){
    res.status(400).json({
      success:false,
      message:"POll Id and option index , userID are required"
    })
    return;
  }



  try {

    const poll = await Poll.findById(pollId);

    if(!poll){
      res.status(404).json({
        success:false,
        message: "poll not found"
      })
      return;
    }


    if(optionIndex < 0 || optionIndex >= poll.options.length){
      res.status(400).json({
        success:false,
        message:'Invalid option index'
      })
      return;
    }

    if(poll.votedUsers.includes(userId)){
      res.status(400).json({
        message:"You have already voted  on this poll"
      })
      return
    }


    poll.votes[optionIndex] += 1;

    poll.votedUsers.push(userId);

    const upatedPoll = await poll.save()

    res.status(200).json({
      success:true,
      message:"Vote counted successfully",
      data: upatedPoll,
    })


  
  } catch (error) {
    console.log("Error while voting", error);
     res.status(500).json({
      success: false,
      message: "Error while voting on polls",
    });
   return;
  }
};
