import { AppDataSource } from "./../../data-source";
import { Contact } from "../../entities";
import { AppError } from "../../errors";
import { IContactRepo } from "../../interfaces";

export const listContactsService = async (user: any) => {
    const contactsRepo: IContactRepo = AppDataSource.getRepository(Contact);

    const contacts = contactsRepo.find({
        where: { user: user },
    });

    if ((await contacts).length == 0) {
        throw new AppError("No contacts registered");
    }

    return contacts;
};
