import { Request, Response } from "express";
import { AddCommentService } from "../../services/comment/AddRecipeCommentService";
import { BadRequestError } from "../../helpers/api-erros";

export class AddCommentController {
  async handle(req: Request, res: Response) {
    const addCommentService = new AddCommentService();

    const { id } = req.params;
    const { content } = req.body;
    const { userId } = req;

    try {
      const result = await addCommentService.execute(id, content, userId);

      return res.json(result);
    } catch (error) {
      throw new BadRequestError(error.message);
    }
  }
}
