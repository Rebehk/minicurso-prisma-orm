import { prisma } from "../../database/prismaClient";

export class DeleteUserService {
  async execute(id: string) {
    const deletedUser = await prisma.user.delete({
      where: { id },
    });

    return deletedUser;
  }
}
