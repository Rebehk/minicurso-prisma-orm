import { Request, Response, Router } from "express";

const recipesRouter: Router = Router();

recipesRouter.get("/recipes", (req: Request, res: Response) => {
  res.send("Retorna todas as receitas");
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

recipesRouter.post("/recipes", (req: Request, res: Response) => {
  res.send("Cria uma nova receita");
});

recipesRouter.post("/recipes/like/:id", (req: Request, res: Response) => {
  res.send("Curtir uma receita");
});

recipesRouter.post("/recipes/deslike/:id", (req: Request, res: Response) => {
  res.send("Descurtir uma receita");
});

recipesRouter.put("/recipes/edit/:id", (req: Request, res: Response) => {
  res.send("Atualiza uma receita");
});

recipesRouter.delete("/recipes/:id", (req: Request, res: Response) => {
  res.send("Deleta uma receita");
});

export { recipesRouter };
