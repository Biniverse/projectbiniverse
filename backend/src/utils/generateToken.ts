import { UserSession } from "../shared/interface";
const jwt = require("jsonwebtoken");

/**
 * The function generates a token for a user session using a secret key and expiration time.
 * @param {UserSession} user - UserSession object containing user information, such as id, username,
 * and other relevant data.
 * @returns The function `generateToken` returns a JSON Web Token (JWT) generated using the `jwt.sign`
 * method from the `jsonwebtoken` library.
 */
export const generateToken = (user: UserSession) => {
  const payload = { id: user };
  const secretKey = process.env.SECRET_KEY;
  const options = { expiresIn: "15m" };

  const token = jwt.sign(payload, secretKey, options);

  return token;
};
