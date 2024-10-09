const jwt = require("jsonwebtoken");

/**
 * The function `generateToken` creates a JWT token with a payload containing a user ID and a specified
 * expiration time.
 * @param {any} user - The `user` parameter in the `generateToken` function is typically the user
 * object or user ID for whom the token is being generated. It is used to create a payload for the
 * token that typically includes information about the user, such as their ID or any other relevant
 * data.
 * @returns The `generateToken` function returns a JSON Web Token (JWT) generated using the `jwt.sign`
 * method from the `jsonwebtoken` library.
 */
export const generateToken = (user: any) => {
  const payload = { id: user };
  const secretKey = process.env.SECRET_KEY;
  const options = { expiresIn: "15m" };

  console.log(secretKey);

  const token = jwt.sign(payload, secretKey, options);

  return token;
};
