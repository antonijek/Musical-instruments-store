import axios from "axios";

const baseUrl = "https://phplaravel-816081-2801950.cloudwaysapps.com/api";

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

export const getInstruments = (currentPage) => {
  return axios.get(`${baseUrl}/instrument?page=${currentPage}`);
};

export const getCategories = () => {
  return axios.get(`${baseUrl}/instrument-category`);
};

export const getCategory = (categoryId, page) => {
  return axios.get(`${baseUrl}/instrument-category/${categoryId}?page=${page}`);
};

export const getOneInstrument = (id) => {
  return axios(`${baseUrl}/instrument/${id}`);
};

export const getSearchedInstrument = (searchedStr) => {
  return axios.get(`${baseUrl}/instrument?instrument_name=${searchedStr}`);
};

export const getUser = (token) => {
  return axios(`${baseUrl}/user`, {
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
  return axios.get(`${baseUrl}/users`, {
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
  return axios.post(`${baseUrl}/instrument`, instrument, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
export const getInstrumentsByAdmin = (token) => {
  return axios.get(`${baseUrl}/admin-instruments`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
export const editUser = (form, token) => {
  return axios.post(`${baseUrl}/update-user`, form, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
export const removeUser = (id, token) => {
  return axios.delete(`${baseUrl}/delete-user/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
export const changePassword = (form, token) => {
  return axios.post(`${baseUrl}/change-password`, form, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const getStatistic = (token) => {
  return axios(`${baseUrl}/statistic`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
