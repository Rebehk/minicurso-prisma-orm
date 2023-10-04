import { prisma } from "../../database/prismaClient";

export class DeleteCommentService {
  async execute(commentId: number) {
    const commentDeleted = await prisma.comment.delete({
      where: { id: commentId },
    });

    return commentDeleted;
  }
}
