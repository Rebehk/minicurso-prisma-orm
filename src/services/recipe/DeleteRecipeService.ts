import { prisma } from "../../database/prismaClient";

export class DeleteRecipeService {
  async execute(recipeId: string) {
    const recipe = await prisma.recipe.delete({
      where: { id: recipeId },
    });

    return recipe;
  }
}
