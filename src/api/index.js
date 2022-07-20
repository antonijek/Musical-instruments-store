import axios from "axios";

export const fetchLogin = async (email, password, setL) => {
  setL(true);
  try {
    const res = await axios.post("http://localhost:8000/api/login", {
      username: email,
      password: password,
    });
    localStorage.setItem("token", res.data.access_token.plainTextToken);
    window.location.href = "/";
    setL(false);
  } catch (err) {
    console.log(err);
    setL(false);
  }
};
