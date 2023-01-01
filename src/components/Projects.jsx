import React from 'react'
import capstone from '../images/capstone.PNG'
import internship from '../images/internship.JPG'
import Modal from './Modal'

function ProjectCard(props) {
  return(
    <div className="custom-font max-w-sm rounded overflow-hidden shadow-xl bg-[#21252B]">
      <img className="w-full cursor-pointer" src={props.image} alt=""/>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{props.type}</div>
        <p className="text-slate-300 text-base">
          {props.title} 
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        {props.stacks.map((s, index) => {
          return <span key={index} style={{backgroundColor: s.color}} className="inline-block rounded-full px-3 py-1 text-sm font-semibold text-[#21252B] mr-2 mb-2">{s.stack}</span>
        })}
      </div>
      <div className='w-full flex gap-4 justify-around my-5 px-4'>
        <div className='flex-1'>
          <Modal type={props.type}/>
        </div>
        <div className='flex-1'>
          {props.type === 'Internship Project' ?
            <a href="https://github.com/dev-maikeru/online-examination-management-system" target={'_blank'} rel='noreferrer'>
              <button className='px-5 py-2 bg-[#21252B] shadow shadow-[#181a1f] hover:bg-[#1a1d22] hover:border hover:border-[#4928db] rounded-md w-full'>Code</button>
            </a>
          :
            <button className='px-5 py-2 bg-[#21252B] shadow shadow-[#181a1f] hover:bg-[#1a1d22] hover:border hover:border-[#4928db] rounded-md w-full'>Code</button>
          }
        </div>
      </div>
    </div>
  )
}
function Projects() {
  const capstoneStack = [
    {
      stack: 'HTML',
      color: '#FF4C1E'
    },
    {
      stack: 'CSS',
      color: '#004CE8',
    },
    {
      stack: 'Bootstrap',
      color: '#563F7B',
    },
    {
      stack: 'JavaScript',
      color: '#FFDF00',
    },
    {
      stack: 'PHP',
      color: '#777BB3',
    },
    {
      stack: 'MySQL',
      color: '#00758F',
    },
  ]
  const internshipStack = [
    {
      stack: 'JavaScript',
      color: '#FFDF00'
    },
    {
      stack: 'MongoDB',
      color: '#12924F'
    },
    {
      stack: 'Express',
      color: '#52565A',
    },
    {
      stack: 'React',
      color: '#61DAFB',
    },
    {
      stack: 'Node.js',
      color: '#75AE63',
    },
    {
      stack: 'Tailwind CSS',
      color: '#07B6D5',
    },
  ]
  return (
    <div name="projects" className='bg-[#181a1d] w-full mb-24 py-4 px-5'>
      <div className='flex flex-col gap-8 justify-center items-center h-full text-white'>
        <h1 className='custom-font text-2xl sm:text-4xl text-[#8892b0] inline border-b-4 border-b-[#4928db]'>Projects</h1>
        <div className='grid gap-4 sm:grid-cols-2 md:grid-cols-3'>
          <ProjectCard 
            image={capstone} 
            title={'E-Scholarship Application and Records Management System'}
            stacks={capstoneStack}
            type={'Capstone Project'}
            />
          <ProjectCard 
            image={internship} 
            title={'Testdeck: Online Examination Management System'}
            stacks={internshipStack}
            type={'Internship Project'}
            />
        </div>
      </div>
    </div>
  )
}

export default Projects