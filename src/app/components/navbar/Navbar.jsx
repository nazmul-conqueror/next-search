'use client'
import React from 'react';
import Navlinks from './Navlinks';

const Navbar = () => {
    return (
     <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
   
    <a className="btn btn-ghost text-xl">Food</a>
  </div>
  <div className="navbar-center hidden lg:flex ">
    <ul className="menu menu-horizontal px-1  ">
     <Navlinks/>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Button</a>
  </div>
</div>
    );
};

export default Navbar;