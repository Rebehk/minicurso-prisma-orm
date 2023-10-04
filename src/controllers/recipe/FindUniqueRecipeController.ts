import { Request, Response } from "express";
import { BadRequestError } from "helpers/api-erros";
import { FindUniqueRecipeService } from "services/recipe/FindUniqueRecipeService";

export class FindUniqueRecipeController {
  async handle(request: Request, response: Response) {
    const findUniqueRecipeService = new FindUniqueRecipeService();

    const { recipeId } = request.params;

    try {
      const result = await findUniqueRecipeService.execute(recipeId);

      return response.status(200).json(result);
    } catch (error) {
      throw new BadRequestError(error.message);
    }
  }
}
