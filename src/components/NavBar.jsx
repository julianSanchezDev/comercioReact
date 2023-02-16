import React, { useState } from 'react';
import CartWidget from './CartWidget'
import Logo from './Logo';



const NavBar = () => {

  const [isOpen, setIsOpen] = useState(false);

  return (

        <div className='flex justify-between bg-red-300 w-full h-24' >

      <div className='pt-5'> <Logo/>
      </div>
       


        <div className="dropdown dropdown-hover">
                  <label tabIndex={0} className="btn m-1">Hover</label>
                    <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                    <li><a>Item 1</a></li>
                    <li><a>Item 2</a></li>
                    </ul>
        </div>

      <CartWidget/>
     
</div>
   
  )
}

export default NavBar