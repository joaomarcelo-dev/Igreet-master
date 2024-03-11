import { Router } from "express";
import admsController from "../controllers/adms.controller";

const admsRouter = Router();

admsRouter.route('/')
.post(
  admsController.createAdm,
)
.delete(
  admsController.deleteAdm,
)

export default admsRouter;