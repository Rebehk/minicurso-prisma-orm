import { prisma } from "../../database/prismaClient";

export class GetUserCommentsService {
  async execute(userId: string, pagina, tamanhoDaPagina) {
    const offset = (pagina - 1) * tamanhoDaPagina;

    const comments = await prisma.comment.findMany({
      skip: offset,
      take: tamanhoDaPagina,
      where: { userId },
      orderBy: { createdAt: "desc" },
    });

    return comments;
  }
}
