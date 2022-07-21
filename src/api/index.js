import axios from "axios";

const baseUrl = "http://localhost:8000/api";

export const login = (email, password) => {
  return axios.post(`${baseUrl}/login`, {
    email,
    password,
  });
};
export const register = (
  firtName,
  lastName,
  userName,
  email,
  password,
  confPass
) => {
  return axios.post(`${baseUrl}/register`, {
    firtName,
    lastName,
    userName,
    email,
    password,
    confPass,
  });
};
