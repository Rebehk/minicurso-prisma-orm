import { prisma } from "../../database/prismaClient";
import { NotFoundError } from "../../helpers/api-erros";

export class RemoveLikeService {
  async execute(likeId: string) {
    const likeExists = await prisma.like.findUnique({
      where: {
        id: likeId,
      },
    });

    if (!likeExists) {
      throw new NotFoundError("Like not found");
    }

    const deletedLike = await prisma.like.delete({
      where: {
        id: likeId,
      },
    });

    return deletedLike;
  }
}
