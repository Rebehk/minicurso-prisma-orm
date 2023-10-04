import { Request, Response } from "express";
import { DeleteUserService } from "../../services/user/DeleteUserService";
import { BadRequestError } from "../../helpers/api-erros";

export class DeleteUserController {
  async handle(req: Request, res: Response) {
    const deleteUserService = new DeleteUserService();

    const { id } = req.params;

    try {
      const result = await deleteUserService.execute(id);

      return res.status(200).json(result);
    } catch (error) {
      throw new BadRequestError(error.message);
    }
  }
}
