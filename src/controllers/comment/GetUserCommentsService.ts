import { Request, Response } from "express";
import { GetUserCommentsService } from "../../services/comment/GetUserCommentsService";
import { BadRequestError } from "helpers/api-erros";

export class GetUserCommentsController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;
    const { pagina, tamanhoDaPagina } = req.query;

    const getUserCommentsService = new GetUserCommentsService();

    try {
      const result = getUserCommentsService.execute(
        id,
        pagina,
        tamanhoDaPagina
      );

      return res.json(result);
    } catch (error) {
      throw new BadRequestError(error.message);
    }
  }
}
