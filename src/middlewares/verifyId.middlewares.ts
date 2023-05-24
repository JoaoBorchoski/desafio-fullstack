import { AppError } from "./../errors";
import { User } from "./../entities/users.entities";
import { Request, Response, NextFunction } from "express";
import { IUserRepo } from "../interfaces";
import AppDataSource from "../data-source";

export const verifyUserId = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const userRepo: IUserRepo = AppDataSource.getRepository(User);
    if (
        !(await userRepo.findOneBy({
            id: +req.params.id,
        }))
    ) {
        throw new AppError("User not found", 404);
    }

    return next();
};
