// auth.js
export const users = [
  { password: "admin9861", role: "admin_page" },
  { password: "user45692", role: "user" },
];

let currentUser = null;

export const login = async (password) => {
  const user = users.find((u) => u.password === password);

  if (!user) {
    throw new Error("Invalid password");
  }

  currentUser = user;
};

export const logout = () => {
  currentUser = null;
};

export const isAdmin = () => currentUser && currentUser.role === "admin_page";

export const getCurrentUser = () => currentUser;
