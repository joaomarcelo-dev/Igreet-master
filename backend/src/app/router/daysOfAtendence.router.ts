import { Router } from "express";
import daysOfAtendenceController from "../controllers/daysOfService.controller";

const daysOfAtendenceRouter = Router();

daysOfAtendenceRouter.route('/')
  .get(
    daysOfAtendenceController.getAllDaysOfAtendence
  )
  .post(
    daysOfAtendenceController.createDaysOfAtendence
  )

daysOfAtendenceRouter.route('/:id')
  .delete(
    daysOfAtendenceController.deleteDaysOfAtendenceById
  );

export default daysOfAtendenceRouter;
