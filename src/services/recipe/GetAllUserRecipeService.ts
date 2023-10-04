import { prisma } from "../../database/prismaClient";

export class GetAllUserRecipes {
  async execute(userId: string) {
    const recipes = await prisma.recipe.findMany({
      where: { author: userId },
    });

    return recipes;
  }
}
