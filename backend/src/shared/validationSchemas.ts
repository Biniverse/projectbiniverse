import { z } from "zod";
import { ROLES } from "./enums";
import { CONTACT_REGEX, NAME_REGEX, USERMESSAGE } from "./constants";

export const CreateUserSchema = z.object({
  firstName: z
    .string()
    .min(1, { message: USERMESSAGE.ERROR.REQUIRED.FIRSTNAME })
    .regex(NAME_REGEX, { message: USERMESSAGE.ERROR.INVALID.FIRSTNAME }),
  lastName: z
    .string()
    .min(1, { message: USERMESSAGE.ERROR.REQUIRED.LASTNAME })
    .regex(NAME_REGEX, { message: USERMESSAGE.ERROR.INVALID.LASTNAME }),
  contact: z
    .string()
    .min(1, { message: USERMESSAGE.ERROR.REQUIRED.CONTACT })
    .regex(CONTACT_REGEX, { message: USERMESSAGE.ERROR.INVALID.CONTACT }),
  email: z.string().email({ message: USERMESSAGE.ERROR.INVALID.EMAIL }),
  password: z
    .string()
    .min(6, { message: USERMESSAGE.ERROR.INVALID.PASSWORD })
    .optional(),
  role: z
    .nativeEnum(ROLES, {
      errorMap: () => ({ message: USERMESSAGE.ERROR.INVALID.ROLE }),
    })
    .optional(),
});
