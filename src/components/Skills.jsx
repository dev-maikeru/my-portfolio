import React from 'react'
import html from '../images/html.png'
import css from '../images/css.png'
import js from '../images/js.png'
import tailwind from '../images/tailwind.png'
import php from '../images/php.png'
import mysql from '../images/mysql.png'
import java from '../images/java.png'
import springboot from '../images/springboot.png'
import mongodb from '../images/mongodb.png'
import express from '../images/express.png'
import reactjs from '../images/reactjs.png'
import nodejs from '../images/nodejs.png'

function SkillProgressBar(props) {
 
  return(
    <div>
      <button>
        <div className="flex gap-4 bg-[#21252B] rounded-lg w-[90vw] lg:w-[450px] shadow-xl p-4 m-auto">
          <div className='self-center'>
            <img src={props.logo} alt="" width={80} height={80}/>
          </div>
          <div className='w-full'>
            <h1 className='text-start'>{props.skill}</h1>
            <div className="w-full h-4 bg-gray-400 rounded-full mt-3">
              <div className={`h-full text-center text-xs text-[#000000] font-bold rounded-full transition-all delay-75 ease-in-out`} style={{backgroundColor: props.color, width: `${String(props.percent).concat('%')}`}}>
                {props.percent + '%'}
              </div>
            </div>
          </div>
        </div>
      </button>
    </div>
  )
}
function Skills() {
  const skills = [
    {
      skill: 'HTML',
      percent: 70,
      color: '#FF4C1E',
      logo: html
    },
    {
      skill: 'CSS',
      percent: 60,
      color: '#004CE8',
      logo: css
    },
    {
      skill: 'JavaScript',
      percent: 70,
      color: '#FFDF00',
      logo: js
    },
    {
      skill: 'Tailwind CSS',
      percent: 60,
      color: '#07B6D5',
      logo: tailwind
    },
    {
      skill: 'PHP',
      percent: 50, 
      color: '#777BB3',
      logo: php
    },
    {
      skill: 'MySQL',
      percent: 50,
      color: '#00758F',
      logo: mysql
    },
    {
      skill: 'Java',
      percent: 60,
      color: '#DE8E2F',
      logo: java
    },
    {
      skill: 'Spring Boot',
      percent: 25,
      color: '#68BD45',
      logo: springboot
    },
    {
      skill: 'MongoDB',
      percent: 60,
      color: '#12924F',
      logo: mongodb
    },
    {
      skill: 'Express',
      percent: 70,
      color: '#52565A',
      logo: express
    },
    {
      skill: 'React',
      percent: 65,
      color: '#61DAFB',
      logo: reactjs
    },
    {
      skill: 'Node JS',
      percent: 70,
      color: '#75AE63',
      logo: nodejs
    },
  ]
  return (
    <div name="skills" className='bg-[#181a1d] w-full'>
      <div className='flex flex-col gap-8 justify-center items-center h-full text-white'>
        <h1 className='custom-font text-2xl sm:text-4xl text-[#8892b0] border-b-4 border-b-[#4928db]'>Skills</h1>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
          {skills.map((s, index) => <SkillProgressBar key={index} skill={s.skill} percent={s.percent} color={s.color} logo={s.logo}/>)}
        </div>
      </div>
     
    </div>
  )
}

export default Skills