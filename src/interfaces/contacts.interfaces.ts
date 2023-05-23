import { Contact } from "./../entities";
import { DeepPartial, Repository } from "typeorm";
import { createContactSchema, createContactSchemaReturn } from "../schemas";
import { z } from "zod";

type IContact = z.infer<typeof createContactSchema>;
type IContactReturn = z.infer<typeof createContactSchemaReturn>;
type IContactRepo = Repository<Contact>;
type IMultipleContacts = Array<IContactReturn>;
type IContactPartial = DeepPartial<IContact>;

export type {
    IContact,
    IContactReturn,
    IContactRepo,
    IMultipleContacts,
    IContactPartial,
};
