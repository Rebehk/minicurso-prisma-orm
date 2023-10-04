import { Request, Response } from "express";
import { DeleteCommentService } from "../../services/comment/DeleteRecipeCommentService";
import { BadRequestError } from "helpers/api-erros";

export class DeleteCommenteController {
  async handle(req: Request, res: Response) {
    const deleteCommentService = new DeleteCommentService();
    const { id } = req.params;

    try {
      const result = await deleteCommentService.execute(Number(id));
    } catch (error) {
      throw new BadRequestError(error.message);
    }
  }
}
