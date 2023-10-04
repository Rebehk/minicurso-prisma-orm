import { prisma } from "../../database/prismaClient";
import { ApiError, NotFoundError } from "../../helpers/api-erros";

export class AddLikeService {
  async execute(recipeId: string, userId: string) {
    const isRecipeRegistered = await prisma.recipe.findUnique({
      where: {
        id: recipeId,
      },
    });

    if (!isRecipeRegistered) {
      throw new NotFoundError("Recipe not found");
    }

    const likeCreated = await prisma.like.create({
      data: {
        userId,
        recipeId,
      },
    });

    if (!likeCreated) {
      throw new ApiError("Like not created", 500);
    }

    return likeCreated;
  }
}
