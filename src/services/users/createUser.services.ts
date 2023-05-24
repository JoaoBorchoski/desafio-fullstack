import { createUserSchemaReturn } from "./../../schemas";
import { IUser, IUserRepo, IUserReturn } from "./../../interfaces";
import { User } from "../../entities";
import { AppError } from "../../errors";
import AppDataSource from "../../data-source";

export const createUserService = async (
    userData: IUser
): Promise<IUserReturn> => {
    const usersRepo: IUserRepo = AppDataSource.getRepository(User);
    if (await usersRepo.exist({ where: { email: userData.email } })) {
        throw new AppError("Email already exists", 409);
    }
    if (await usersRepo.exist({ where: { phone: userData.phone } })) {
        throw new AppError("Phone already exists", 409);
    }

    const user = usersRepo.create(userData);
    await usersRepo.save(user);
    const userReturn = createUserSchemaReturn.parse(user);
    return userReturn;
};
