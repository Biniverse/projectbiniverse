export const NAME_REGEX = /^[A-Za-z]+(?: [A-Za-z]+)*$/;
export const CONTACT_REGEX = /^[+0-9#\- ]{6,15}$/;

export const USERMESSAGE = {
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

export const ERROR = {
  LIMIT: "Too many requests, please try again after 15 minutes",
};

export const LOGINERROR = {
  NOTFOUND: "User not found.",
  INVALIDCREDENTIALS: "Invalid username/password. Please try again later",
  LOGINSUCCSS: "Successfully logged in",
};
