import { Request, Response } from "express";
import { RemoveLikeService } from "../../services/like/RemoveLikeRecipeService";
import { BadRequestError } from "../../helpers/api-erros";

export class RemoveLikeController {
  async handle(req: Request, res: Response) {
    const removeLikeService = new RemoveLikeService();

    const { id } = req.params;

    try {
      const result = await removeLikeService.execute(id);

      return res.json(result);
    } catch (error) {
      throw new BadRequestError(error.message);
    }
  }
}
