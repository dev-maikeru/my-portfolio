import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import { IoArrowUpCircle } from 'react-icons/io5'
import './styles/styles.css'
import { Link } from 'react-scroll'
import React, { useEffect, useState } from 'react'

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
      <div className="App">
        <header>
          <Navbar/>
        </header>
      
        <main className="flex flex-col gap-12 bg-[#181a1d]">
          <Home/>
          <About/>
          <Skills/>
          <Projects/>
        </main>

        {/* Arrow up icon */}
        {scrollPosition > 800 ?
          <Link duration={300} to={'home'} isDynamic={true} smooth={true} className="cursor-pointer">
            <IoArrowUpCircle className='fixed bottom-5 right-5 text-4xl text-[#4928db] hover:scale-125 ease-linear delay-100 transition-all'/>
          </Link>
        : ''}
      </div>
  );
}

export default App;
