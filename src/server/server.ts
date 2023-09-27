import "express-async-errors";
import express from "express";

import {
  userRouter,
  authRouter,
  commentsRouter,
  recipesRouter,
} from "../routes";
import errorHandlingMiddleware from "../middlewares/errorHandling";

const app = express();

app.use(express.json());

app.use("/api", userRouter);
app.use("/api", authRouter);
app.use("/api", commentsRouter);
app.use("/api", recipesRouter);

app.use(errorHandlingMiddleware);

export { app };
