import { Router } from "express";
import serviceController from "../controllers/service.controller";

const serviceRouter = Router();

serviceRouter.route('/')
.post(
  serviceController.createService,
)
.get(
  serviceController.getService,
)

export default serviceRouter;