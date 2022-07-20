import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import logo from "../../../Assets/Images/logo.png";

import Navbar from "../../Layout/Navbar/Navbar";

const Home = () => {
  return (
    <div className="drawer drawer-mobile min-h-screen">
      <input id="dashboardSidebar" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content p-5">
        {/* <!-- Page content here --> */}

        {/* Navbar */}
        <Navbar />
        <Outlet />
      </div>
      <div className="drawer-side">
        <label htmlFor="dashboardSidebar" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-[260px] bg-base-100 text-base-content text-center">
          {/* <!-- Sidebar content here --> */}
          <img className="w-[215px]" src={logo} alt="" />

          <li>
            <NavLink className="active" to="orders">
              Dashboard
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
