import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";
import { Reorder } from "@mui/icons-material";

function Navbar() {
  const [expanded, setExpanded] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setExpanded(false);
  }, [location]);

  function handleClick() {
    setExpanded((prev) => !prev);
  }

  return (
    <div className="navbar" id={expanded ? "open" : "close"}>
      <div className="toggleButton">
        <button onClick={handleClick}>
          <Reorder />
        </button>
      </div>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/experience">Experience</Link>
      </div>
    </div>
  );
}

export default Navbar;
