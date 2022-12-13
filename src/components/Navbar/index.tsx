import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./Style.css";

function Navbar() {
  return (
    <>
      <nav className="flex relative justify-center">
        <ul className=" flex ">
          <li>
            <Link to="/">
              <button className="bt">
                <span className="absolute left-0 inset-y-0 flex items-center pl-3"></span>
                TODO List
              </button>
            </Link>
          </li>
          <li>
            <Link to="/addtodo">
              <button className="bt">
                <span className="absolute left-0 inset-y-0 flex items-center pl-3"></span>
                Add TODO
              </button>
            </Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
}

export default Navbar;
