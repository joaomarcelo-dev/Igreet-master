import { Router } from "express";
import DaysOfAtendenceController from "../controllers/daysOfAtendence.controller";

const daysOfAtendenceRouter = Router();

daysOfAtendenceRouter.route('/')
.get(
  DaysOfAtendenceController.getAllDaysOfAtendence
)

export default daysOfAtendenceRouter;