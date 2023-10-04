import { prisma } from "../../database/prismaClient";

export class GetCommentsRecipeService {
  async execute(recipeId: string, pagina, tamanhoDaPagina) {
    const offset = (pagina - 1) * tamanhoDaPagina;

    const comments = await prisma.comment.findMany({
      skip: offset,
      take: tamanhoDaPagina,
      where: { recipeId },
    });

    return comments;
  }
}
