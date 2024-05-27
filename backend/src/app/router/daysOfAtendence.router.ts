import { Router } from "express";
import DaysOfAtendenceController from "../controllers/daysOfAtendence.controller";
import authMiddleware from "../middleware/auth.middleware";

const daysOfAtendenceRouter = Router();

daysOfAtendenceRouter.route('/')
.get(
  DaysOfAtendenceController.getAllDaysOfAtendence
)
.post(
  // authMiddleware.authToken,
  DaysOfAtendenceController.createDayOfAtendence,
)
.put(
  // authMiddleware.authToken,
  DaysOfAtendenceController.deletDaysOfAtendenceById,
)

export default daysOfAtendenceRouter;