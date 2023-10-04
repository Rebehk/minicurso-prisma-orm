import { Request, Response } from "express";
import { AddLikeService } from "../../services/like/AddLikeRecipeService";
import { BadRequestError } from "../../helpers/api-erros";

export class AddLikeController {
  async handle(req: Request, res: Response) {
    const addLikeService = new AddLikeService();

    const { id } = req.params;

    try {
      const result = await addLikeService.execute(id, req.userId);

      return res.json(result);
    } catch (error) {
      throw new BadRequestError(error.message);
    }
  }
}
