import { Router } from "express";
import DaysOfAtendenceController from "../controllers/daysOfAtendence.controller";

const daysOfAtendenceRouter = Router();

daysOfAtendenceRouter.route('/')
.get(
  DaysOfAtendenceController.getAllDaysOfAtendence
)
.post(
  DaysOfAtendenceController.createDayOfAtendence
)
.put(
  DaysOfAtendenceController.deletDaysOfAtendenceById,
)

export default daysOfAtendenceRouter;