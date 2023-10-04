import { Request, Response } from "express";
import { EditCommentService } from "../../services/comment/EditeRecipeCommentService";
import { BadRequestError } from "helpers/api-erros";

export class EditCommentController {
  async handle(req: Request, res: Response) {
    const editCommentService = new EditCommentService();

    const { id } = req.params;
    const { content } = req.body;

    try {
      const result = await editCommentService.execute(Number(id), content);

      return res.json(result);
    } catch (error) {
      throw new BadRequestError(error.message);
    }
  }
}
