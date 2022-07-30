export const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: "80%", sm: "50%", md: "30%" },
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: { xs: 2, md: 4 },
};
export const styleModal = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: "80%", sm: "60%" },
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: { xs: 1, sm: 4 },
  display: { xs: "block", sm: "grid" },
  gridTemplateColumns: "1fr 1fr",
};

export const checkEmail = (email) => {
  let patern =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let res = patern.test(email);
  return res;
};

export const checkPass = (password) => {
  let patern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
  let res = patern.test(password);
  return res;
};
export const pad_with_zeroes = (number, length) => {
  var my_string = "" + number;
  while (my_string.length < length) {
    my_string = "0" + my_string;
  }

  return my_string;
};
