import { Request, Response, Router } from "express";

const commentsRouter: Router = Router();

commentsRouter.post("/comment/create/:id", (req: Request, res: Response) => {
  res.send("Cria um novo comentario na receita");
});

commentsRouter.put("/comment/edit/:id", (req: Request, res: Response) => {
  res.send("Atualiza o comentario");
});

commentsRouter.delete("/comment/delete/:id", (req: Request, res: Response) => {
  res.send("Deleta o comentario");
});

export { commentsRouter };
