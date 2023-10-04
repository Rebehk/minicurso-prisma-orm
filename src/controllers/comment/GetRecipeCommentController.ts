import { Request, Response } from "express";
import { BadRequestError } from "../../helpers/api-erros";
import { GetCommentsRecipeService } from "../../services/comment/GetCommentsRecipeService";

export class GetCommentsRecipeController {
  async handle(req: Request, res: Response) {
    const getCommentsRecipeService = new GetCommentsRecipeService();

    const { id } = req.params;
    const { pagina, tamanhoDaPagina } = req.query;

    try {
      const result = await getCommentsRecipeService.execute(
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
