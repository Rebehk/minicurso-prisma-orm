import { Request, Response } from "express";
import { GetAllUserRecipes } from "../../services/recipe/GetAllUserRecipeService";
import { BadRequestError } from "helpers/api-erros";

export class GetAllUserRecipeController {
  async handle(req: Request, res: Response) {
    const getAllUserRecipeService = new GetAllUserRecipes();

    const { id } = req.params;

    try {
      const result = await getAllUserRecipeService.execute(id);

      return res.status(200).json(result);
    } catch (error) {
      throw new BadRequestError(error.message);
    }
  }
}
