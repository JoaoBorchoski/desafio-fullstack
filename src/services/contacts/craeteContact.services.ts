import { AppDataSource } from "./../../data-source";
import { Contact } from "../../entities";
import { AppError } from "../../errors";
import { IContact, IContactRepo } from "../../interfaces";

export const createContactService = async (userData: IContact, user: any) => {
    const contactsRepo: IContactRepo = AppDataSource.getRepository(Contact);

    if (
        await contactsRepo.findOneBy({
            email: userData.email,
            user: user,
        })
    ) {
        throw new AppError("Contact already registered");
    }

    if (
        await contactsRepo.findOneBy({
            phone: userData.phone,
        })
    ) {
        throw new AppError("Phone already registered");
    }

    const contact = {
        ...userData,
        user: user,
    };

    const newContact = contactsRepo.create(contact);
    contactsRepo.save(newContact);

    return newContact;
};
