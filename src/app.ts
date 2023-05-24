import "express-async-errors";
import express, { Application } from "express";
import { handleErrors } from "./errors";
import { usersRouter, loginRouter, contactRouter } from "./routers";
import cors from "cors";

const app: Application = express();
app.use(cors());
app.use(express.json());

app.use("/login", loginRouter);
app.use("/users", usersRouter);
app.use("/contacts", contactRouter);

app.use(handleErrors);

export default app;
