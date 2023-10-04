import { Request, Response } from "express";
import { CreateRecipeService } from "../../services/recipe/CreateRecipeService";
import { BadRequestError } from "../../helpers/api-erros";

export class CreateRecipeController {
  async handle(req: Request, res: Response) {
    const createRecipeService = new CreateRecipeService();

    const { author, title, ingredients } = req.body;

    const newRecipe = {
      author,
      title,
      ingredients,
    };

    try {
      const result = await createRecipeService.execute(newRecipe);

      return res.json(result);
    } catch (error) {
      throw new BadRequestError(error.message);
    }
  }
}
