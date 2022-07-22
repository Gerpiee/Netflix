import React from "react";
import { MDBFooter } from "mdb-react-ui-kit";

const Footer = () => {
  return (
    <MDBFooter
      className="text-center text-white"
      style={{ backgroundColor: "black" }}
    >
      <div className="container p-4"></div>

      <div className="text-center p-3" style={{ backgroundColor: "black" }}>
        <h4>
          {" "}
          © 2022 Copyright:
          <a className="text-white" href="https://netflix.com/">
            Netflix.com
          </a>
        </h4>
      </div>
    </MDBFooter>
  );
};
export default Footer;
