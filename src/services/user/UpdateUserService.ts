import { prisma } from "../../database/prismaClient";
import { hash } from "bcryptjs";

export class UpdateUserService {
  async execute(id: string, updateUser, updateProfile) {
    const { email, password, fullName, role } = updateUser;
    const { bio, avatar } = updateProfile;

    if (updateUser.password) {
      updateUser.password = await hash(updateUser.password, 8);
    }

    const updatedUser = await prisma.user.update({
      where: { id },
      data: {
        fullName,
        email,
        password,
        role,
        profile: {
          update: {
            bio,
            avatar,
          },
        },
      },
      include: {
        profile: true,
      },
    });

    return updatedUser;
  }
}
