import { Stack } from "@mui/system";
import React from "react";
import Img from "../assests/landing.jpg";
import LoginCta from "../components/loginCta";
import RegisterCta from "../components/registerCta";

const LandingPage = () => {
  return (
    <div>
      <nav className="nav">
        <div>
          <span className="logo">Logo</span>
        </div>
        <Stack direction="row" spacing={2} width="20%">
          <LoginCta />
          <RegisterCta />
        </Stack>
      </nav>
      <div className="content">
        <div className="content-left">
          <div className="left-content">
            <h1>School OS</h1>
            <div className="subtitle">
              Full-featured electronic version of a school diary{" "}
              <span className="register-content">
                <button className="register-btn">Register</button>
              </span>
            </div>
            <br />
            <div>
              School OS is a progressive education management solution for
              schools, parents and education authorities. It offers electronic
              diary functionality to schools. School OS was created with the
              sole aim to make teaching and parenting more engaging, efficient
              and fun. It makes the communication between school and home
              easier, quicker and paper free.
            </div>
          </div>
        </div>
        <div className="content-right">
          <img src={Img} className="img-right" />
        </div>
      </div>
      <footer>
        <div>&copy; 2023 Your Company | Contact: info@example.com</div>
      </footer>
    </div>
  );
};

export default LandingPage;
