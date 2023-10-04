import { prisma } from "../../database/prismaClient";

export class FindAllUserService {
  async execute() {
    const users = await prisma.user.findMany();

    return users;
  }
}
