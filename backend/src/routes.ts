
import UserController from "./Controllers/UserController";
import { Router } from "express";
const routes = Router();

routes.get("/users",UserController.index)
routes.post("/users/create",UserController.create)

export default routes;