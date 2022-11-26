import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand text-light text-xl" to="/">
         <b> Employee Management System</b>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active text-info" aria-current="page" to="/">
               <b>DisplayEmployeesData</b>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active text-info" to="/add">
               <b>AddEmployee</b>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active text-info" to="/edit">
                <b>UpdateEmployee</b>
              </Link>
            </li>
          </ul>
          {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
