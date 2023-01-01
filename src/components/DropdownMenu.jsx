import React from 'react'
import { Link } from 'react-scroll'

function DropdownMenu({ setIsCollapsed }) {
  return (
    <div className='w-full'>
      <ul className='flex flex-col justify-center items-center text-white gap-4'>
        <Link onClick={() => setIsCollapsed(false)} activeClass='active' duration={300} to={'home'} smooth={true} className="hover:text-blue-700 ease-in-out delay-75 transition- cursor-pointer">Home</Link>
        <Link onClick={() => setIsCollapsed(false)} to={'about'} smooth={true} duration={300} className="hover:text-blue-700 ease-in-out delay-75 transition-all cursor-pointer">About</Link>
        <Link onClick={() => setIsCollapsed(false)} to={'skills'} smooth={true} duration={300} className="hover:text-blue-700 ease-in-out delay-75 transition-all cursor-pointer">Skills</Link>
        <Link onClick={() => setIsCollapsed(false)} to={'projects'} smooth={true} duration={300} className="hover:text-blue-700 ease-in-out delay-75 transition-all cursor-pointer">Projects</Link>
      </ul>
    </div>
  )
}

export default DropdownMenu