import { Request, Response } from "express";
import { CreateUserService } from "../../services/user/CreateUserController";
import { BadRequestError } from "../../helpers/api-erros";

export class CreateUserController {
  async handle(req: Request, res: Response) {
    const createUserService = new CreateUserService();

    const newUser = {
      fullName: req.body.fullName,
      email: req.body.email,
      password: req.body.password,
      role: req.body.role ?? req.body.role,
    };

    try {
      const result = await createUserService.execute(newUser);

      return res.json(result);
    } catch (error) {
      throw new BadRequestError(error.message);
    }
  }
}
