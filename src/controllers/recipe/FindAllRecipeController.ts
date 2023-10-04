import { Request, Response } from "express";
import { FindAllRecipeService } from "../../services/recipe/FindAllRecipeService";
import { BadRequestError } from "../../helpers/api-erros";

export class FindAllRecipeController {
  async handle(request: Request, response: Response) {
    const findAllRecipeService = new FindAllRecipeService();

    try {
      const result = await findAllRecipeService.execute();

      return response.status(200).json(result);
    } catch (error) {
      throw new BadRequestError(error.message);
    }
  }
}
