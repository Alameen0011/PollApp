import express from "express";
import { createPoll, getPolls, vote, } from "../controllers/pollController";



const router = express.Router();    


router.get('/',getPolls);
router.post('/',createPoll)
router.post('/vote',vote)



export default router;