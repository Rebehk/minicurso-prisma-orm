import { prisma } from "../../database/prismaClient";

export class EditCommentService {
  async execute(commentId: number, content: string) {
    const date = new Date();

    const commentUpdated = await prisma.comment.update({
      where: { id: commentId },
      data: {
        content,
        updatedAt: date,
      },
    });

    return commentUpdated;
  }
}
