import React from "react";
import { Twitter, Email, GitHub, LinkedIn } from "@mui/icons-material";

import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <Email />
        <GitHub />
        <Twitter />
        <LinkedIn />
      </div>
      <p>&copy; 2023 AtharvaPatil.com</p>
    </div>
  );
}

export default Footer;
