import { Request, Response, Router } from "express";

import { CreateRecipeController } from "../controllers/recipe/CreateRecipeController";
import { AddLikeController } from "../controllers/like/AddLikeRecipeController";
import { RemoveLikeController } from "../controllers/like/RemoveLikeRecipeController";
import { prisma } from "../database/prismaClient";
import { ensuredAuthenticated } from "../middlewares/ensuredAuthenticated";

const createRecipeController = new CreateRecipeController();
const addLikeController = new AddLikeController();
const removeLikeController = new RemoveLikeController();

const recipesRouter: Router = Router();

recipesRouter.get("/recipes", async (req: Request, res: Response) => {
  const recipes = await prisma.recipe.findMany();
  res.json(recipes);
});

recipesRouter.get("/recipes/my-recipes", (req: Request, res: Response) => {
  res.send("Retorna as receitas do usuario");
});

recipesRouter.get("/recipes/:id/comments", (req: Request, res: Response) => {
  res.send("Retorna todas as comentarios da receita");
});

recipesRouter.get("/recipes/:id", (req: Request, res: Response) => {
  res.send("Retorna uma receita especifica");
});

recipesRouter.post("/recipes", createRecipeController.handle);

recipesRouter.post(
  "/recipes/like/:id",
  ensuredAuthenticated(),
  addLikeController.handle
);

recipesRouter.post(
  "/recipes/deslike/:id",
  ensuredAuthenticated(),
  removeLikeController.handle
);

recipesRouter.put("/recipes/edit/:id", (req: Request, res: Response) => {
  res.send("Atualiza uma receita");
});

recipesRouter.delete("/recipes/:id", (req: Request, res: Response) => {
  res.send("Deleta uma receita");
});

export { recipesRouter };
