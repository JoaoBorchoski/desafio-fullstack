import { createContactService } from "../services/contacts/craeteContact.services";
import { Request, Response } from "express";
import { listContactsService } from "../services/contacts/listContacts.services";
import { updateContactService } from "../services/contacts/updateContact.services";
import { deleteContactServices } from "../services/contacts/deleteContact.services";

export const createContactController = async (req: Request, res: Response) => {
    const id: number = +req.params.id;
    const newContact = await createContactService(req.body, req.user);

    return res.status(201).json(newContact);
};

export const listContactController = async (req: Request, res: Response) => {
    const list = await listContactsService(req.user);

    return res.status(200).json(list);
};

export const updateContactController = async (req: Request, res: Response) => {
    const id: number = +req.params.id;
    const updated = await updateContactService(req.body, id, req.user);

    return res.status(200).json(updated);
};

export const deleteContactController = async (req: Request, res: Response) => {
    const id: number = +req.params.id;
    await deleteContactServices(id);

    return res.status(204).send();
};
