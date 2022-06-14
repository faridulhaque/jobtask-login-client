
import React from "react";

import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">ATools</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <i className="fa-solid fa-bars"></i>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="btn btn-primary me-3" aria-current="page" href="#">Start Free Trial</a>
        </li>
        <hr/>
        <li className="nav-item">
          <a className="btn btn-secondary me-3" href="#">Login</a>
        </li>
        </ul>
    </div>
  </div>
</nav>
    </div>
  );
};

export default Navbar;
