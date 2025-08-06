import { Router } from "express";
import { usersRoutes } from "./usersRoutes";
import { sessionsRoutes } from "./sessionsRoutes";
import { refundsRoutes } from "./refundsRoutes";
import { ensureAuthenticated } from "@/middlewares/ensureAuthenticated";

const routes = Router();

routes.use("/users", usersRoutes);
routes.use("/sessions", sessionsRoutes);

routes.use(ensureAuthenticated);
routes.use("/refunds", refundsRoutes);

export { routes };
