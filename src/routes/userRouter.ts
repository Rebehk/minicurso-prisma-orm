import { UpdateUserController } from "../controllers/user/UpdateUserController";
import { CreateUserController } from "../controllers/user/CreateUserController";
import { Request, Response, Router } from "express";
import { ensuredAuthenticated } from "../middlewares/ensuredAuthenticated";

const createUserController = new CreateUserController();
const updateUserController = new UpdateUserController();

const userRouter: Router = Router();

userRouter.post("/user/register", createUserController.handle);

userRouter.put(
  "/user/edit",
  ensuredAuthenticated(),
  updateUserController.handle
);

userRouter.delete("/user/delete/:id", (req: Request, res: Response) => {
  res.send("Usuario deletado com sucesso");
});

userRouter.get("/user/profile/:id", (req: Request, res: Response) => {
  res.send("Retorna dados do usuario");
});

export { userRouter };
