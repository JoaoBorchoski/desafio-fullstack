import { Router } from "express";
import { verifyData, verifyToken, verifyUserId } from "../middlewares";
import { createContactSchema } from "../schemas";
import {
    createContactController,
    deleteContactController,
    listContactController,
    updateContactController,
} from "../controllers/contacts.controllers";
import { updateContact } from "../schemas/contact.schemas";

export const contactRouter: Router = Router();

contactRouter.get("", verifyToken, listContactController);

contactRouter.post(
    "",
    verifyToken,
    verifyData(createContactSchema),
    createContactController
);

contactRouter.patch(
    "/:id",
    verifyToken,
    verifyData(updateContact),
    updateContactController
);
contactRouter.delete("/:id", verifyToken, deleteContactController);
