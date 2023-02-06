import React from "react";
import { NavLink } from "react-router-dom";

export const NavButton = ({ to, value, close }) => {
  return (
    <NavLink
      end
      className={({ isActive }) =>
        "py-6 px-3 text-sm text-center flex justify-center items-center hover:bg-gray-800 border-2 border-transparent hover:border-b-gray-700" +
        (isActive ? " bg-gray-800 border-b-gray-700" : "")
      }
      to={to}
      onClick={close}
    >
      {value}
    </NavLink>
  );
};
