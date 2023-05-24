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
    listUsersController,
    updateUserController,
    deleteUserController,
    retriveUserController,
} from "./../controllers/users.controllers";

export const usersRouter: Router = Router();
export const userDetailRouter: Router = Router();

usersRouter.post("", verifyData(createUserSchema), createUserController);
usersRouter.get("", listUsersController);
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

userDetailRouter.get("/:id", verifyUserId, retriveUserController);
