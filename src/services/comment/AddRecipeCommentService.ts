import { prisma } from "../../database/prismaClient";

export class AddCommentService {
  async execute(recipeId: string, content, userId) {
    const commentCreated = await prisma.comment.create({
      data: {
        author: userId,
        content,
        recipeId,
        userId,
      },
    });

    return commentCreated;
  }
}
