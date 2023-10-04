import { Request, Response } from "express";
import { FindUserProfileService } from "../../services/user/FindUserProfileService";
import { BadRequestError } from "helpers/api-erros";

export class FindUserProfileController {
  async handle(req: Request, res: Response) {
    const findUserProfileService = new FindUserProfileService();

    const { id } = req.params;

    try {
      const result = await findUserProfileService.execute(id);

      return res.json(result);
    } catch (error) {
      throw new BadRequestError(error.message);
    }
  }
}
