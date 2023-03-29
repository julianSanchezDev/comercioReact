import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import CartWidget from './CartWidget';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="navbar bg-base-100 flex justify-between">
      <div className="flex-2">
        <Link to={"/"}>
          <img src="./logomain.svg" alt="" />
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <button>
              <Link to={"/catalogo"}>CATOLOGO</Link>
            </button>
          </li>
          <li>
            <div className="dropdown">
              <label tabIndex={0} className="btn m-1">category</label>
              <ul className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                <li>
                  <button>
                    <Link to={`/category/${"remera"}`}>remera</Link>
                  </button>
                </li>
                <li>
                  <button>
                    <Link to={`/category/${"campera"}`}>campera</Link>
                  </button>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
      <div>
        <Link to={"/cart"}>
          <CartWidget />
        </Link>
      </div>
    </div>
  );
};

export default NavBar;


