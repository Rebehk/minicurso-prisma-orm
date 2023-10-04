import { prisma } from "database/prismaClient";

export class FindUserProfileService {
  async execute(id: string) {
    const user = await prisma.profile.findUnique({
      where: { userId: id },
    });

    return user;
  }
}
