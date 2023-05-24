import { User } from "./../../entities/users.entities";
import { IUserRepo } from "../../interfaces";
import { userSchemaMultiples } from "../../schemas/users.schemas";
import AppDataSource from "../../data-source";

export const retriverUsersServices = async (): Promise<any> => {
    const userRepo: IUserRepo = AppDataSource.getRepository(User);

    const result = await userRepo.find();
    const users = userSchemaMultiples.parse(result);

    return users;
};
