import { UpdateUserController } from "../controllers/user/UpdateUserController";
import { CreateUserController } from "../controllers/user/CreateUserController";
import { Request, Response, Router } from "express";
import { ensuredAuthenticated } from "../middlewares/ensuredAuthenticated";
import { checkOwnership } from "../middlewares/checkOwnership.";
import { DeleteUserController } from "../controllers/user/DeleteUserController";
import { FindUserProfileController } from "../controllers/user/FindUserProfileController";

const createUserController = new CreateUserController();
const updateUserController = new UpdateUserController();
const deleteUserController = new DeleteUserController();
const findUserProfileController = new FindUserProfileController();

const userRouter: Router = Router();

userRouter.post("/user/register", createUserController.handle);

userRouter.put(
  "/user/edit/:id",
  ensuredAuthenticated(),
  checkOwnership(),
  updateUserController.handle
);

userRouter.delete(
  "/user/delete/:id",
  ensuredAuthenticated(),
  checkOwnership(),
  deleteUserController.handle
);

userRouter.get(
  "/user/profile/:id",
  ensuredAuthenticated(),
  findUserProfileController.handle
);

export { userRouter };
