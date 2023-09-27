import { sign } from "jsonwebtoken";

class GenerateToken {
  async execute(userPayload) {
    const secretKey: string =
      process.env.SECRET_KEY || "8FI0UDRA7kTm1sXKO/4DVRcalvGU+NFhzkInrSskaN0=";

    const token = sign({ userPayload }, secretKey, {
      subject: userPayload.userId,
      expiresIn: "1h",
    });

    return token;
  }
}

export { GenerateToken };
