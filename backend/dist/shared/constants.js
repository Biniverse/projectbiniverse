"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ERROR = exports.USERMESSAGE = exports.CONTACT_REGEX = exports.NAME_REGEX = void 0;
exports.NAME_REGEX = /^[A-Za-z]+(?: [A-Za-z]+)*$/;
exports.CONTACT_REGEX = /^[+0-9#\- ]{6,15}$/;
exports.USERMESSAGE = {
    ERROR: {
        REQUIRED: {
            FIRSTNAME: "First name is required",
            LASTNAME: "Last name is required",
            CONTACT: "Contact is required",
            ROLE: "Role is required",
        },
        INVALID: {
            FIRSTNAME: "Invalid first name",
            LASTNAME: "Invalid last name",
            CONTACT: "Invalid contact",
            EMAIL: "Invalid email address",
            PASSWORD: "Invalid password",
            ROLE: "Invalid role",
        },
    },
    SUCCESS: {
        CREATED: "User has been successfully created",
    },
    EXIST: {
        EMAIL: "Email already exists",
    },
};
exports.ERROR = {
    LIMIT: "Too many requests, please try again after 15 minutes",
};
//# sourceMappingURL=constants.js.map