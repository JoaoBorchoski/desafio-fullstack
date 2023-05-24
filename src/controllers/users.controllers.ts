import { Request, Response } from "express";
import {
    createUserService,
    retriveUserServices,
    updateUserService,
    deleteUserServices,
} from "../services/users";
import { listUsersServices } from "../services/users/listUsers.services";

export const createUserController = async (req: Request, res: Response) => {
    const newUser = await createUserService(req.body);

    return res.status(201).json(newUser);
};

export const listUsersController = async (req: Request, res: Response) => {
    const users = await listUsersServices();

    return res.json(users);
};

export const retriveUserController = async (req: Request, res: Response) => {
    const id: number = +req.params.id;
    const user = await retriveUserServices(id);

    return res.json(user);
};

export const updateUserController = async (req: Request, res: Response) => {
    const id: number = +req.params.id;
    const user = await updateUserService(req.body, id, req.user);

    return res.status(200).json(user);
};

export const deleteUserController = async (req: Request, res: Response) => {
    const id: number = +req.params.id;
    await deleteUserServices(id);

    res.status(204).send();
};
