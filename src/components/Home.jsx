import React from 'react'
import Typed from "react-typed"

function Home() {
  return (
    <div name="home" className='bg-[#181a1d] w-full h-screen'>
      <div className='h-full mx-auto flex flex-col md:flex-row justify-around'>
        <div className='flex flex-col px-8 justify-center h-full text-white md:w-[450px] lg:w-[656px]'>
          <p className='custom-font text-[#4928db] text-xl'>Hi, I am</p>
          <h1 className='custom-font text-2xl sm:text-4xl text-[#8892b0]'>Michael</h1>
          <div className='md:w-[450px] lg:w-[41rem]'>
            <Typed
                className='custom-font text-2xl sm:text-4xl text-[#8892b0] break-words'
                strings={[
                  "I am an aspiring software engineer.",
                  "I love programming!",
                ]}
                typeSpeed={50}
                backSpeed={40}
                backDelay={2000}
                loop
              />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home