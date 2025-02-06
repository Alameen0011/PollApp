import { Request,Response } from "express"


export const getPolls = async(req:Request,res:Response) => {
    try {
        //write the logic here
        res.json("HI WElcome")
    } catch (error) {
        console.log(error)
    }
}


export const createPoll = async() => {
    try {
        //write the logic here
    } catch (error) {
        console.log(error)
    }
}

export const vote = async() => {
    try {
        //write the logic here
    } catch (error) {
        console.log(error)
    }
}