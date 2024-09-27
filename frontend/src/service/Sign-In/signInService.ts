export const signInService = async (username: String, password: String) => {
  const response = await fetch("/users-list", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      password,
    }),
  });

  if (!response.ok) {
    throw new Error("Invalid Credentials");
  }

  const data = await response.json();
  return data;
};
