import { User } from "./../../entities/users.entities";
import { IUserRepo } from "../../interfaces";
import AppDataSource from "../../data-source";

export const deleteUserServices = async (id: number): Promise<void> => {
    const userRepo: IUserRepo = AppDataSource.getRepository(User);

    const user: User | null = await userRepo.findOneBy({
        id: +id,
    });

    await userRepo.softRemove(user!);
};
