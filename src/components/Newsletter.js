import React from "react";
import "../styles/Newsletter.css";
import ForwardToInboxIcon from "@mui/icons-material/ForwardToInbox";
import { Button } from "@mui/material";
const Newsletter = () => {
  return (
    <div className="newsletter">
      <h1>Newsletter</h1>
      <label className="label-news" htmlFor="email">
        Enter your email to send you the latest news.
      </label>
      <div className="div-news">
        <input type="email" name="email" id="email" className="input-news" />
        <button className="button-news">OK</button>
      </div>
    </div>
  );
};

export default Newsletter;
