import { Router } from "express";
import { LoginUserController } from "../controllers/auth/LoginUserController";

const loginUserController = new LoginUserController();

const authRouter: Router = Router();

authRouter.post("/auth/login", loginUserController.handle);

export { authRouter };
