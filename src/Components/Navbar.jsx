import React from "react";
import Container from "./Container";
import { Link } from "react-router";

const Navbar = () => {
  const navLinks = (
    <>
      <Link to={"/"}>
        {" "}
        <li className="btn btn-ghost text-gray-500">Home</li>
      </Link>
      <Link to={"listedBook"}>
        {" "}
        <li className="btn btn-ghost text-gray-500">Listed Books</li>
      </Link>
      <Link to={"pagesToRead"}>
        <li className="btn btn-ghost text-gray-500">Pages to Read</li>
      </Link>
    </>
  );
  return (
    <>
      <Container>
        <div className="navbar py-5  font">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                {navLinks}
              </ul>
            </div>
            <a className="btn btn-ghost font-bold text-2xl">React Book Vibe</a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navLinks}</ul>
          </div>
          <div className="navbar-end gap-4">
            <a className="btn bg-green-500 text-white rounded-md">Sign In</a>
            <a className="btn bg-sky-500 text-white rounded-md">Sign Up</a>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Navbar;
