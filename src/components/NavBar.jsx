import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { NavButton } from "./ui/NavButton";

export const NavBar = () => {
  const open = "-translate-x-32";

  const [close, setClose] = useState(open);

  const [buttonnav, setButtonnav] = useState("");

  const handleclose = () => {
    if (close === open) {
      setClose("left-0");
      setButtonnav("is-active");
    } else {
      setClose("-translate-x-32");
      setButtonnav("");
    }
  };

  return (
    <header>
      <button
        onClick={handleclose}
        className={`${buttonnav} absolute z-20 top-0 left-0 hamburger hamburger--collapse-r bg-slate-700 rounded-br-3xl h-20 px-4`}
      >
        <span className="hamburger-box">
          <span className="hamburger-inner"></span>
        </span>
      </button>

      <nav
        className={`${close} pt-24 bg-slate-700 h-full text-white z-10 absolute shadow-black shadow-lg transition-transform duration-300 ease-in`}
      >
        <div className="grid grid-rows-3 flex-wrap w-min">
          <img src="/assets/img/logo/logo-white-v2.svg" className="w-full" />

          <NavButton
            to={"/quiensoy"}
            value={"Home"}
            close={handleclose}
          />

          <NavButton
            to={"/listdinos"}
            value={"Listado de dinosaurios"}
            close={handleclose}
          />
        </div>
      </nav>
    </header>
  );
};
