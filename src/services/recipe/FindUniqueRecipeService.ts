import { prisma } from "../../database/prismaClient";

export class FindUniqueRecipeService {
  async execute(recipeId: string) {
    const recipe = await prisma.recipe.findUnique({
      where: { id: recipeId },
    });

    return recipe;
  }
}
