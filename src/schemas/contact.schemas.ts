import { z } from "zod";

const createContactSchema = z.object({
    name: z.string().max(45),
    email: z.string().email(),
    phone: z.string(),
});

const createContactSchemaReturn = createContactSchema.extend({
    id: z.number(),
});

const contactSchemaMultiples = createContactSchemaReturn.array();

const updateContact = createContactSchema.partial();

export {
    createContactSchema,
    createContactSchemaReturn,
    contactSchemaMultiples,
    updateContact,
};
