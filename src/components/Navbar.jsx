import React, { useState, useEffect } from 'react'
import { CgMenuRight } from 'react-icons/cg'
import DropdownMenu from './DropdownMenu'
import { Link } from 'react-scroll'
import logo from '../images/logo.png'

function Navbar() {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const unscrolledClass = 'bg-transparent p-7'
  const scrolledClass = 'bg-[#181a1d] p-5 shadow shadow-[#111214]'

  const handleScroll = () => {
    const position = window.pageYOffset;
    if (position === 0) {
       setIsScrolled(false)
    }
    if (position > 80) {
      setIsScrolled(true)
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
 
  return (
    <div className={`w-full fixed z-50 transition-all duration-300 ease-in-out ${isScrolled ? scrolledClass : unscrolledClass}`}>
      <div className='flex justify-between gap-4 md:px-12'>
        {/* Logo */}
        <Link to={'home'} smooth={true} duration={300} className='cursor-pointer'>
          <img className='transition-all duration-300 ease-in-out' src={logo} alt="" width={isScrolled ? 100 : 120}/> 
        </Link>

        {/* Nav links */}
        <ul className='hidden text-white md:flex gap-4 items-center custom-font'>
          <Link activeClass='active' duration={300} to={'home'} smooth={true} className="text-sm hover:text-[#4928db] ease-in-out delay-75 transition- cursor-pointer">Home</Link>
          <Link to={'about'} smooth={true} duration={300} className="text-sm hover:text-[#4928db] ease-in-out delay-75 transition-all cursor-pointer">About</Link>
          <Link to={'skills'} smooth={true} duration={300} offset={-100} className="text-sm hover:text-[#4928db] ease-in-out delay-75 transition-all cursor-pointer">Skills</Link>
          <Link to={'projects'} smooth={true} duration={300} className="text-sm hover:text-[#4928db] ease-in-out delay-75 transition-all cursor-pointer">Projects</Link>
        </ul>

        {/* Hamburger menu icon */}
        <div className='md:hidden flex items-center'>
          <button onClick={() => setIsCollapsed(!isCollapsed)}>
            <CgMenuRight className='text-2xl text-white'/>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`mt-5 block md:hidden ${isCollapsed ? 'block' : 'hidden'}`}>
        <DropdownMenu setIsCollapsed={setIsCollapsed}/>
      </div>
    </div>
  )
}

export default Navbar