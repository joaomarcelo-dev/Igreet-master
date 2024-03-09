import { Router } from "express";
import serviceController from "../controllers/service.controller";

const serviceRouter = Router();

serviceRouter.route("/")

.post(
  serviceController.createService
)

serviceRouter.route('/:id')
.get(
  serviceController.getServiceById,
)

export default serviceRouter;
