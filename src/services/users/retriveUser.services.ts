import { User } from "./../../entities/users.entities";
import { IUserRepo } from "../../interfaces";
import { createUserSchemaReturn } from "../../schemas/users.schemas";
import AppDataSource from "../../data-source";

export const retriveUserServices = async (id: number): Promise<any> => {
    const userRepo: IUserRepo = AppDataSource.getRepository(User);

    const result = await userRepo.findOneBy({ id: id });
    const user = createUserSchemaReturn.parse(result);

    return user;
};
