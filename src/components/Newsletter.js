import { React, useState } from "react";
import "../styles/Newsletter.css";
import ForwardToInboxIcon from "@mui/icons-material/ForwardToInbox";
import SendIcon from "@mui/icons-material/Send";

import { Button, Input, TextField } from "@mui/material";
import { checkEmail } from "../utils";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [errorEmail, setErrorEmail] = useState(false);

  const handleInput = () => {
    setErrorEmail(!checkEmail(email));
  };
  const handleEmail = (e) => {
    setEmail(e);
    setErrorEmail(false);
  };

  return (
    <div className="newsletter">
      <h1>Newsletter</h1>
      <label className="label-news" htmlFor="email">
        Enter your email to send you the latest news.
      </label>
      <div className="div-news">
        <TextField
          InputProps={{ style: { height: 40 } }}
          sx={{
            ml: { xs: 0, md: "15%" },
            width: { xs: "60%", sm: "40%", md: "30%" },
            backgroundColor: "white",
            mt: { xs: 3, md: 0 },
          }}
          type="email"
          error={errorEmail}
          onChange={(e) => handleEmail(e.target.value)}
          helperText={errorEmail ? "incorrect email" : ""}
          variant="outlined"
          id="email"
          value={email}
        />
        <Button
          onClick={handleInput}
          sx={{
            mt: { xs: 3, md: 0 },
          }}
          variant="contained"
          endIcon={<SendIcon />}
        >
          Send
        </Button>
      </div>
    </div>
  );
};

export default Newsletter;
