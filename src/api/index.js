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
  return axios.get(`${baseUrl}/instrument/`);
};

export const getCategories = () => {
  return axios.get(`${baseUrl}/instrument-category`);
};

export const getCategory = (categoryId) => {
  return axios.get(`${baseUrl}/instrument-category/${categoryId}`);
};
export const getOneInstrument = (id) => {
  return axios(`${baseUrl}/instrument/${id}`);
};

export const getUser = (token) => {
  return axios(`${baseUrl}/user/`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const rating = (token, id, num) => {
  let rate = { grade: num };
  return axios.post(`${baseUrl}/instrument/${id}/rate`, rate, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
export const getOrders = (token) => {
  return axios(`${baseUrl}/purchases`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
export const getOneOrder = (token, id) => {
  return axios(`${baseUrl}/purchases/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
export const getUsers = (token) => {
  return axios.get(`${baseUrl}/users/`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
export const verify = (id, token) => {
  return axios.post(`${baseUrl}/verify/${id}`, undefined, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const editInstrument = (id, data, token) => {
  return axios.put(`${baseUrl}/instrument/${id}`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
export const removeInstrument = (id, token) => {
  return axios.delete(`${baseUrl}/instrument/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
export const adding = (instrument, token) => {
  return axios.post(`${baseUrl}/instrument/`, instrument, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
