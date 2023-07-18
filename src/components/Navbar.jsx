import React, { useEffect, useState }from 'react';
import { Link } from "react-router-dom"; // to navigate to other parts of our page

import {styles} from '../styles';
import {navLink} from '../constants';
import {logo, menu, close} from '../assets';


const Navbar = () => {
  const [actve, setActive] = useState(second)


  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>

      {/* due to the fact is a react router dom so we can a link compont a onclick property */}
        <Link       
          to='/'
          className='flex items-center gap-2'
          onClick={()=>{
            setActive('');
          }}
          >
        </Link>
      </div>

    </nav>
  )
}

export default Navbar