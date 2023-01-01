import React from 'react'
import Me from '../images/FloresJMC.png'
import Typed from "react-typed"

function About() {
  return (
    <div name="about" className='bg-[#181a1d] w-full h-screen max-w-[1000px] mx-auto p-4'>
      <div className='flex flex-col gap-8 justify-center items-center h-full text-white'>
        <h1 className='custom-font text-2xl sm:text-4xl text-[#8892b0] border-b-4 border-b-[#4928db]'>About</h1>
        <div className='flex flex-col gap-4 md:flex-row justify-around p-4'>
          <div className="shape-outer heptagon self-center">
            <div className="shape-inner heptagon"></div>
            <div className='div-image'><img className="my-image" src={Me} alt="" /></div>
          </div>
          <div className='self-center'>
            <div className='text-center md:text-start'>
              <Typed
                className='custom-font text-xl md:text-2xl font-bold'
                strings={[
                  "Hi! I am John Michael Flores"
                ]}
                typeSpeed={70}
              />
            </div>
            <p className='custom-font text-justify mt-5'>
              I am a perseverant, adaptable, and open-minded individual who is passionated in programming,
              building web applications, and learning new technologies. I am eager to learn new technologies
              and put my knowledge into practice. As an aspiring software engineer, my goal is to refine my
              skills and use it to bring the best solutions to modern problems and contribute to organization's
              goals and objectives.
           </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About