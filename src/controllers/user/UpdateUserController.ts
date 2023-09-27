import { Request, Response } from "express";
import { BadRequestError } from "../../helpers/api-erros";
import { UpdateUserService } from "../../services/user/UpdateUserService";

export class UpdateUserController {
  async handle(req: Request, res: Response) {
    const updateUserService = new UpdateUserService();

    const id = req.userId;

    const updateUser = {
      fullName: req.body.fullName,
      email: req.body.email,
      password: req.body.password,
      role: req.body.role ?? req.body.role,
    };

    try {
      const result = await updateUserService.execute(id, updateUser);

      return res.json(result);
    } catch (error) {
      throw new BadRequestError(error.message);
    }
  }
}
