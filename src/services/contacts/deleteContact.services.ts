import { Contact } from "./../../entities";
import { AppError } from "../../errors";
import AppDataSource from "../../data-source";

export const deleteContactServices = async (id: number): Promise<void> => {
    const contactRepo = AppDataSource.getRepository(Contact);
    const contact: any = await contactRepo.findOneBy({ id: id });

    if (!contact) {
        throw new AppError("Contact not found", 404);
    }

    await contactRepo.remove(contact!);
};
