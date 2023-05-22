import { z } from "zod";

const createUserSchema = z.object({
    name: z.string().max(45),
    email: z.string().email(),
    admin: z.boolean().optional().default(false),
    password: z.string().max(120),
    phone: z.string(),
});

const createUserSchemaReturn = createUserSchema
    .extend({ id: z.number() })
    .omit({ password: true });

const userSchemaMultiples = createUserSchemaReturn.array();
const updateUserSchema = createUserSchema.omit({ admin: true }).partial();

export {
    createUserSchema,
    createUserSchemaReturn,
    userSchemaMultiples,
    updateUserSchema,
};
