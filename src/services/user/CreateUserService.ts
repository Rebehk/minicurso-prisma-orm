import { hash } from "bcryptjs";
import { prisma } from "../../database/prismaClient";
import { ApiError, ConflictError } from "../../helpers/api-erros";

export class CreateUserService {
  async execute(data) {
    const userExists = await prisma.user.findUnique({
      where: {
        email: data.email,
      },
    });

    if (userExists) {
      throw new ConflictError("User already exists");
    }

    const hashedPassword = await hash(data.password, 8);

    data.password = hashedPassword;

    const userCreated = await prisma.user.create({ data });

    if (!userCreated) {
      throw new ApiError("User not created", 500);
    }

    userCreated.password = undefined;

    return userCreated;
  }
}
