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
        className={`${buttonnav} absolute z-20 top-2 left-2 hamburger hamburger--collapse-r `}
      >
        <span className="hamburger-box">
          <span className="hamburger-inner"></span>
        </span>
      </button>

      <nav
        className={`${close}  pt-20 bg-slate-700 h-full text-white z-10 absolute shadow-black shadow-lg transition-transform duration-300 ease-in`}
      >
        <div className="grid grid-rows-3 flex-wrap w-min">
          <Link className="text-center my-3" to="/">
            <img src="/assets/img/logo/logo-white-v2.svg" className="w-full" />
          </Link>

          <NavButton to={"/quiensoy"} value={"¿Quien soy?"} />

          <NavButton to={"/listdinos"} value={"Dinosaurios Argentinos"} />
        </div>
      </nav>
    </header>
  );
};
