import { createUserSchema, updateUserSchema } from "./../schemas/users.schemas";
import { Router } from "express";
import {
    verifyData,
    verifyToken,
    verifyUserId,
    verifyPermission,
} from "../middlewares";
import {
    createUserController,
    retriveUsersController,
    updateUserController,
    deleteUserController,
} from "./../controllers/users.controllers";

export const usersRouter: Router = Router();

usersRouter.post("", verifyData(createUserSchema), createUserController);
usersRouter.get("", retriveUsersController);
usersRouter.patch(
    "/:id",
    verifyData(updateUserSchema),
    verifyToken,
    verifyUserId,
    updateUserController
);
usersRouter.delete(
    "/:id",
    verifyUserId,
    verifyPermission,
    deleteUserController
);
