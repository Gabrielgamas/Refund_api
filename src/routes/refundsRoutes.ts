import { Router } from "express";
import { RefundsController } from "@/controllers/refundsController";
import { verifyUserAuthorization } from "@/middlewares/verifyUserAuthorization";

const refundsRoutes = Router();
const refundsController = new RefundsController();

refundsRoutes.post(
  "/",
  verifyUserAuthorization(["employee"]),
  refundsController.create
);

export { refundsRoutes };
