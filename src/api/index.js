import axios from "axios";

const baseUrl = "http://localhost:8000/api";

export const login = (email, password) => {
  return axios.post(`${baseUrl}/login`, {
    email,
    password,
  });
};
export const register = (firstName, lastName, username, email, password) => {
  return axios.post(`${baseUrl}/register`, {
    first_name: firstName,
    last_name: lastName,
    username,
    email,
    password,
  });
};

export const getInstruments = () => {
  return axios.get(`${baseUrl}/instrument/`)
}

export const getCategories = () => {
  return axios.get(`${baseUrl}/instrument/instrument-category}`)
}

export const getCategory = (category) => {
  return axios.get(`${baseUrl}/instrument/instrument-category/${category}`)
}
export const getOneInstrument = (id) => {
  return axios(`${baseUrl}/instrument/${id}`);
};
