import React from "react";
import portfolio from "../../utils/portfolio.png";
import { Typography } from "@material-ui/core";
import "./AboutMe.scss";

const AboutMe = () => {
  return (
    <React.Fragment>
      <Typography
        variant="h2"
        display="block"
        align="center"
        style={{
          margin: "1rem",
          fontSize: "1.6rem",
          textTransform: "uppercase"
        }}
      >
        {/*  <Element name="about-me" id="about-me">
                About Me
            </Element> */}
      </Typography>
      <div className="name">
        <img src={portfolio} alt="profile_photo" className="img" />
        <h1>Madel Liquido</h1>
        <div className="subtitle">
          <h3>Wall Street Quant by day. Avid full stack development student by night.</h3>
          <p>
            Always enthusiastic to learn new technologies! <br />
            Hard work beats talent when talent doesn't work hard. 
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AboutMe;
