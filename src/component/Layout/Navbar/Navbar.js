import React from "react";
import search from "../../../Assets/Images/search.png";
import email from "../../../Assets/Images/email.png";
import cart from "../../../Assets/Images/shopping-cart.png";
import notification from "../../../Assets/Images/notification.png";
import ellipse from "../../../Assets/Images/ellipse.png";

const Navbar = () => {
  return (
    <div class="navbar bg-base-100 rounded-md mb-5">
      <div class="navbar-start">
        <div class="dropdown">
          <label tabindex="0" class="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          <ul
            tabindex="0"
            class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Homepage</a>
            </li>
            <li>
              <a>Portfolio</a>
            </li>
            <li>
              <a>About</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="navbar-center">
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            class="input input-md w-[486px] bg-accent px-10"
          />
          <span className="absolute left-4 top-4">
            <img src={search} alt="" />
          </span>
        </div>
      </div>

      <div class="navbar-end">
        <div className="flex items-center gap-8">
          <a href="#">
            <img src={email} alt="" />
          </a>
          <a href="#">
            <img src={cart} alt="" />
          </a>
          <a href="#">
            <img src={notification} alt="" />
          </a>
        </div>

        <div className="user-info ml-10 flex items-center gap-3 pr-5">
          <img src={ellipse} alt="" />
          <div>
            <h3 className="font-bold">John Doe</h3>
            <p className="text-xs text-gray-400">Admin</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
