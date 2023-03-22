<<<<<<< HEAD
import { Link } from "react-router-dom";
import React, { useState } from "react";
import CartWidget from "./CartWidget";

const NavBar = () => {
=======

import { Link } from 'react-router-dom'
import React, { useState } from 'react';
import CartWidget from './CartWidget'

const NavBar = () => {

>>>>>>> c850d7706d86fe399eb917a947e6e3f3508d8c37
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="navbar bg-base-100 flex justify-between">
      <div className="flex-2">
<<<<<<< HEAD
        <Link to={"/"}>
          <img src="./logomain.svg" alt="" />
        </Link>
=======
        
      <Link to={"/"}><img src="./logomain.svg" alt="" /></Link>
>>>>>>> c850d7706d86fe399eb917a947e6e3f3508d8c37
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <button>
<<<<<<< HEAD
            <Link to={"/catalogo"}>CATOLOGO</Link>
          </button>

          <div className="dropdown">
            <label tabIndex={0} className="btn m-1">
              catalogo
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <button>
                <Link to={`/category/${"remera"}`}>remera</Link>
              </button>
              <button>
                <Link to={`/category/${"campera"}`}>campera</Link>
              </button>
            </ul>
          </div>
=======
          <Link to={"/catalogo"}>
            CATOLOGO
          </Link>
          </button>

                  <div className="dropdown">
          <label tabIndex={0} className="btn m-1">category</label>
          <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">

            <button><Link to= {`/category/${"remera"}`}>remera</Link></button>
            <button><Link to= {`/category/${"campera"}`}>campera</Link></button>
          
          
          </ul>
        </div>
>>>>>>> c850d7706d86fe399eb917a947e6e3f3508d8c37
        </ul>
      </div>
      <div>
        <Link to={"/cart"}>
<<<<<<< HEAD
          <CartWidget />
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
=======
            <CartWidget/>
        </Link>
        
      </div>
    </div>

  )
}

export default NavBar
>>>>>>> c850d7706d86fe399eb917a947e6e3f3508d8c37
