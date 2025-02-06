import { Router } from "express";
import { createPoll, getPolls } from "../controllers/pollController";


const router = Router();


router.get('/',getPolls);
router.post('/',createPoll)



export default router;