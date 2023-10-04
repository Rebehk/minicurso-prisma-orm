import { prisma } from "../../database/prismaClient";

export class FindAllRecipeService {
  async execute() {
    const recipes = await prisma.recipe.findMany();

    return recipes;
  }
}
