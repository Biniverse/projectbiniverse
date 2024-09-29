import http from "../httpService";

export const signInService = async (username: string, password: string) => {
  try {
    const response = await http.post("/signin", {
      body: JSON.stringify({
        username,
        password,
      }),
    });
    return response;
  } catch (error) {
    throw error;
  }
};
