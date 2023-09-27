import { compare } from "bcryptjs";
import { prisma } from "../../database/prismaClient";

import { NotFoundError, UnauthorizedError } from "../../helpers/api-erros";
import { GenerateToken } from "../../providers/GenerateToken";

export class LoginUserService {
  async execute(email: string, password: string) {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!user) {
      throw new NotFoundError("User or Password incorrect!");
    }

    const passwordMatched = await compare(password, user.password);

    if (!passwordMatched) {
      throw new UnauthorizedError("User or Password incorrect!");
    }

    const userPayload = {
      userId: user.id,
      role: user.role,
    };

    const generateToken = new GenerateToken();
    const token = await generateToken.execute(userPayload);

    return { token, userPayload };
  }
}
