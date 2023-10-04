import { prisma } from "../../database/prismaClient";

export class UpdateRecipeService {
  async execute(id: string, updateRecipe) {
    const updatedRecipe = await prisma.recipe.update({
      where: { id },
      data: updateRecipe,
    });

    return updatedRecipe;
  }
}
