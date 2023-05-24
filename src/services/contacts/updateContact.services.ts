import AppDataSource from "../../data-source";
import { Contact, User } from "../../entities";
import { AppError } from "../../errors";
import { IContactPartial, IContactRepo } from "../../interfaces";
import { createContactSchemaReturn } from "../../schemas";

export const updateContactService = async (
    userData: IContactPartial,
    id: number,
    user: any
) => {
    const contactRepo = AppDataSource.getRepository(Contact);
    const contact = await contactRepo.findOneBy({ id: id });

    if (userData.email) {
        if (
            await contactRepo.findOneBy({
                email: userData.email,
            })
        ) {
            throw new AppError("Email already exists.", 409);
        }
    }

    const update = await contactRepo.save({ ...contact, ...userData });

    return update;
};
