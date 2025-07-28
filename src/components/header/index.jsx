import React from 'react';
import LOGO from '../../assets/FAXA-logo-transparent.png'

const Header = () => {
  return (
    <header className='mb-20'>
      <div className="container mx-auto flex items-center justify-between h-[100px]">
        <img src={LOGO} alt="" className='w-[160px] h-[110px] border-none'/>
        <ul className='flex gap-15'>
          <li>
            <span><a href="#"></a>Home</span>
          </li>
           <li>
            <span><a href="#"></a>Products</span>
          </li>
           <li>
            <span><a href="#"></a>About</span>
          </li>
        </ul>
        <button className='w-[130px] h-[45px] bg-[#1a1b1b] text-white rounded-[10px]'>Get Started</button>
      </div>
    </header>
  )
}

export default Header;