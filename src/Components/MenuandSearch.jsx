import React from "react";
import { Link } from "react-router-dom";

export const MenuandSearch = () => {
  return (
    <>
      <div className="w-[100%]">
        <div className="p-2 h-fit flex justify-between items-center">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn bg-success text-white m-1 mr-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="20"
                height="20"
                viewBox="0 0 50 50"
                fill="#ffffff"
              >
                <path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z"></path>
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-200 rounded-box w-52"
            >
              <li>
                <Link to={'/'}>Home</Link>
              </li>
              <li>
                <Link to={'/clothes'}>Clothes</Link>
              </li>
              <li>
                <Link to={'/shoes'}>Shoes</Link>
              </li>
              <li>
                <Link to={'/electronics'}>Electronics</Link>
              </li>
            </ul>
          </div>
          <div className="flex">
            <input placeholder="search" className="p-2 rounded-s-xl"></input>
            <div className="bg-success p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="20"
                height="20"
                viewBox="0 0 50 50"
                fill="white"
              >
                <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
