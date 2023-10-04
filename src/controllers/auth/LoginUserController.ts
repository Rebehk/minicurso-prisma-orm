import { Request, Response } from "express";
import { LoginUserService } from "../../services/auth/LoginUserService";

export class LoginUserController {
  async handle(req: Request, res: Response) {
    const loginUserService = new LoginUserService();

    const { email, password } = req.body;

    try {
      const result = await loginUserService.execute(email, password);

      return res.json(result);
    } catch (error) {
      return res.status(401).json({ error: error.message });
    }
  }
}
