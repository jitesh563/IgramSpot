import React from 'react'
import { VscAccount } from "react-icons/vsc";
import AppLogo from "../logo/AppLogo.png"



const NavBar = () => {
  return (
    <header className="p-4 sticky top-0 z-50 drop-filter backdrop-blur-xl bg-opacity-60  ">
        <div className="flex items-center">
          <img src={AppLogo} className='w-10 h-10' alt="" />
          <h1 className="text-xl font-bold">
            Igram<span className="text-pink-500">Spot</span>
          </h1>
        </div>
      </header>
  )
}

export default NavBar