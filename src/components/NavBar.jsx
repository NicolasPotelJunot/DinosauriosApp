import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { NavButton } from './ui/NavButton'

export const NavBar = () => {
  return (
    <nav className='bg-slate-700 text-white h-screen'>

      <div className='grid grid-rows-3 flex-wrap w-min'>

        <Link
        className="text-center my-3" 
        to="/"
        >
          <img 
          src='/assets/img/logo/logo-white-v2.svg' 
          className='w-full'
          />
        </Link>

        <NavButton to={"/quiensoy"} value={"¿Quien soy?"} />

        <NavButton to={"/listdinos"} value={"Dinosaurios Argentinos"} />

      </div>

    </nav>
  )
}
