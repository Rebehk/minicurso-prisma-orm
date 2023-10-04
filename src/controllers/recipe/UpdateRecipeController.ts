import { prisma } from "../../database/prismaClient";
import { hash } from "bcryptjs";

export class UpdateUserService {
  async execute(id: string, updateUser) {
    if (updateUser.password) {
      updateUser.password = await hash(updateUser.password, 8);
    }

    const updatedUser = await prisma.user.update({
      where: { id },
      data: updateUser,
    });

    return updatedUser;
  }
}
