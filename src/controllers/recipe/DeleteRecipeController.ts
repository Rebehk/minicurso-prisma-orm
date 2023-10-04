import { Request, Response } from "express";
import { BadRequestError } from "../../helpers/api-erros";
import { DeleteRecipeService } from "../../services/recipe/DeleteRecipeService";

export class DeleteRecipeController {
  async handle(request: Request, response: Response) {
    const deleteRecipeService = new DeleteRecipeService();

    const { recipeId } = request.params;

    try {
      const result = await deleteRecipeService.execute(recipeId);

      return response.status(200).json(result);
    } catch (error) {
      throw new BadRequestError(error.message);
    }
  }
}
