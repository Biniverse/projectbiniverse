"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserSchema = void 0;
const zod_1 = require("zod");
const enums_1 = require("./enums");
const constants_1 = require("./constants");
exports.CreateUserSchema = zod_1.z.object({
    firstName: zod_1.z
        .string()
        .min(1, { message: constants_1.USERMESSAGE.ERROR.REQUIRED.FIRSTNAME })
        .regex(constants_1.NAME_REGEX, { message: constants_1.USERMESSAGE.ERROR.INVALID.FIRSTNAME }),
    lastName: zod_1.z
        .string()
        .min(1, { message: constants_1.USERMESSAGE.ERROR.REQUIRED.LASTNAME })
        .regex(constants_1.NAME_REGEX, { message: constants_1.USERMESSAGE.ERROR.INVALID.LASTNAME }),
    contact: zod_1.z
        .string()
        .min(1, { message: constants_1.USERMESSAGE.ERROR.REQUIRED.CONTACT })
        .regex(constants_1.CONTACT_REGEX, { message: constants_1.USERMESSAGE.ERROR.INVALID.CONTACT }),
    email: zod_1.z.string().email({ message: constants_1.USERMESSAGE.ERROR.INVALID.EMAIL }),
    password: zod_1.z
        .string()
        .min(6, { message: constants_1.USERMESSAGE.ERROR.INVALID.PASSWORD })
        .optional(),
    role: zod_1.z
        .nativeEnum(enums_1.ROLES, {
        errorMap: () => ({ message: constants_1.USERMESSAGE.ERROR.INVALID.ROLE }),
    })
        .optional(),
});
//# sourceMappingURL=validationSchemas.js.map