import { prisma } from "../../database/prismaClient";
import { ApiError, ConflictError } from "../../helpers/api-erros";

export class CreateRecipeService {
  async execute(newRecipe) {
    const { author, title, ingredients } = newRecipe;

    const recipeExists = await prisma.recipe.findUnique({
      where: {
        title,
      },
    });

    if (recipeExists) {
      throw new ConflictError("Recipe already exists");
    }

    const recipeCreated = await prisma.recipe.create({
      data: {
        author,
        title,
        ingredients,
      },
    });

    if (!recipeCreated) {
      throw new ApiError("Recipe not created", 500);
    }

    return recipeCreated;
  }
}
