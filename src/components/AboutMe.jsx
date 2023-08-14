import React from 'react'

import {motion} from 'framer-motion'

import {VscFolderLibrary} from 'react-icons/vsc'
import {FiUsers} from 'react-icons/fi'
import {SiXdadevelopers} from 'react-icons/si'
import {CiCalendarDate} from 'react-icons/ci'

import MyImage from '../assest/me-7.jpg'

import CV from '../../src/assest/Mahel Chandupa.pdf'

const containerVarients ={
  whileInView:{
      transition:{
          delayChildren: 0.2,
          staggerChildren: 0.6
      }
  }
}

const imgVarients ={
  initial:{
      opacity: 0,
      // x: -100,
       y: 100,
  },
  whileInView: () =>({
      opacity: 1,
      // x: 0,
       y: 0,
  })
}


const AboutMe = () => {
  return (
    <section id='about' className=' overflow-hidden py-[100px]  lg:h-auto font-mono bg-cover lg:bg-contain bg-center bg-[url("https://github.githubassets.com/images/modules/site/home-campaign/bg-stars-1.webp")] '>
      <div className=' px-5 container mx-auto overflow-hidden'>
        <div className=''>
        {/* header */}
        <motion.p 
        initial={{ x: -40,  opacity: 0 }} 
        whileInView={{
          x:0,
          opacity: 1,
          transition: {duration: 1.1, ease: "easeInOut"}
        }}
        viewport={{ once: true }}
        
        className=' text-slate-500 text-center text-sm lg:text-lg'>Get To Know</motion.p>
        <motion.h3 
          initial={{ x: 300, opacity: 0 }} 
          whileInView={{
            x: 0,
            opacity: 1,
            transition: {duration: 1.2, ease: "easeInOut"}
          }}
          viewport={{ once: true }}
         className="text-white text-center text-3xl lg:text-4xl overflow-hidden">
             About Me
        </motion.h3>  
        </div>  
      
       <div className=' mt-[80px] lg:my-[100px] grid lg:grid-cols-[30%,50%] grid-row-2 justify-center lg:gap-[15%] '>
            {/* text */}
            <div className=' order-2 text-white'>
              <motion.div 
                variants={containerVarients}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true }}
              className=' grid lg:grid-cols-3 lg:gap-[1.5rem] grid-cols-2 gap-[2rem]'>
                <motion.div 
                variants={imgVarients}
                className=' rounded-md gap-y-3 flex flex-col items-center justify-center bg-[#2c2c6c] p-[2rem] hover:bg-transparent hover:border-[1px] hover:border-white hover:text-white cursor-pointer hover:transitio hover:ease-in-out'>
                    <p className=' text-lg'>Experience</p>
                    <SiXdadevelopers className=' text-xl'/>
                    <p className=' text-slate-400 text-center'>Not Yet</p>
                </motion.div>
                <motion.div 
                variants={imgVarients}
                className=' rounded-md gap-y-3 flex flex-col items-center justify-center bg-[#2c2c6c] p-[2rem] hover:bg-transparent hover:border-[1px] hover:border-white hover:text-white cursor-pointer hover:transitio hover:ease-in-out'>
                    <p className=' text-lg'>Clients</p>
                    <FiUsers className=' text-xl'/>
                    <p className=' text-slate-400 text-center'>Not Yet</p>
                </motion.div>
                <motion.div 
                variants={imgVarients}
                className=' rounded-md gap-y-3 flex flex-col items-center justify-center bg-[#2c2c6c] p-[2rem] hover:bg-transparent hover:border-[1px] hover:border-white hover:text-white cursor-pointer hover:transitio hover:ease-in-out'>
                    <p className=' text-lg'>Projects</p>
                    <VscFolderLibrary className=' text-xl'/>
                    <p className=' text-slate-400 text-center'>2 Projects</p>
                </motion.div>
              </motion.div>
              <div className=' mt-10 lg:relative'>
                <motion.p 
                   initial={{ x: 80,  opacity: 0 }} 
                   whileInView={{
                     x:0,
                     opacity: 1,
                     delay: 1.0 ,
                     transition: {delay: 0.7 ,duration: 1.1, ease: "easeInOut"}
                   }}
                   viewport={{ once: true }}
                className=' text-center lg:text-left text-slate-100 text-justify lg:w-full text-[1rem] mb-5'>
                   Welcome to my portfolio! I'm an enthusiastic software engineering student with a strong passion for creative problem-solving. Throughout my academic journey, I've focused on web development, honing my skills in key languages like JavaScript, Python, and Java. 
                   These languages have empowered me to bring ideas to life and create user-centric web apps.I'm skilled in both front-end frameworks like React, and backend tools like Node.js. My experience includes designing efficient database solutions using MySQL and MongoDB.
                   I'm excited to showcase my projects, each reflecting my dedication to web development. Thanks for exploring my portfolio.                
              </motion.p>

              <motion.div 
                 initial={{ y: -40,  opacity: 0 }} 
                 whileInView={{
                   y:0,
                   opacity: 1,
                   delay: 1.0 ,
                   transition: {delay: 1.0 ,duration: 1.1, type:"spring",
                   stiffness: 110,}
                 }}
                 viewport={{ once: true }}
                class=" flex items-center justify-center lg:justify-start mt-10 lg:mt-5">
                    <a class="text-black  px-4 py-3 bg-[#4db5ff] rounded-md hover:bg-transparent hover:border hover:border-white hover:text-white cursor-pointer transition ease-in-out" href={CV} download>Download CV</a>
              </motion.div> 

              </div>
            </div>

            <motion.div 
            initial={{ x: -100, opacity: 0 }} 
            whileInView={{
              x: 0,
              opacity: 1,
              transition: {duration: 1.4, ease: "easeInOut"}
            }}
            viewport={{ once: true }}
            className=' order-1 lg:w-full lg:my-auto w-[65%] m-auto mb-12 sm:m-0 md:w-[50%] md:mb-12 md:mx-auto rounded-[2rem] grid place-items-center aspect-square bg-slate-800 rounded-lg'>
                <img className=' block bg-cover h-[100%] w-full origin-center rounded-[2rem] rotate-12 hover:rotate-0 transition ease-in-out' src={MyImage} alt="" />
            </motion.div>

        </div>
        {/* Experience & Education */}

        <div className='mt-[50px] flex flex-col lg:flex-row gap-y-10 lg:gap-x-16'>
           
          {/* Education */}
           <motion.div 
               initial={{ x: -200, opacity: 0 }} 
               whileInView={{
                 x: 0,
                 opacity: 1,
                 delay: 1.5,
                 transition: {duration: 1.4, ease: "easeInOut"}
               }}
              viewport={{ once: true }}
               className=' text-white flex-1 lg:mx-40 overflow-hidden'>
               <h2 className=' mb-[30px] text-[24px]'>Education</h2>
               <div className=''>
                 <div className='timeline-box flex-1 w-full '>
                  <div className='timeline py-[30px] px-[15px] border-2 border-slate-300 w-full relative rounded-lg	'>
                    {/* timeline item */}
                    <div className="timeline-item relative pl-[37px] pb-[25px] lg:pb-[50px] before:[''] before:w-[1px] before:absolute before:h-full before:left-[7px] before:top-0 before:bg-red-500">
                       <div className="circle-dot absolute w-[15px] h-[15px] left-0 top-0 bg-red-500 rounded-full"></div>
                       <div className=' flex flex-row '>
                         <CiCalendarDate  className=' text-xl mr-2 text-sky-300'/> 
                         <h3 className='timeline-date mb-4 text-sky-300 '>11/2023 - Present</h3>
                       </div>                  
                       <h4 className='timeline-title text-lg lg:text-xl mb-5 capitalize'>Bachelor Of Science (Hons) In Computing</h4>
                       <p className=' text-gray-400 text-sm lg:text-md'>Pursuing B.Sc. (Hons) in Computing since Nov 2023. Gaining comprehensive knowledge of computer science fundamentals, programming, and problem-solving for a promising tech-focused future.</p>
                    </div>

                     {/* timeline item */}
                     <div className="timeline-item relative pl-[37px] pb-[25px] lg:pb-[50px] before:[''] before:w-[1px] before:absolute before:h-full before:left-[7px] before:top-0 before:bg-red-500">
                       <div className="circle-dot absolute w-[15px] h-[15px] left-0 top-0 bg-red-500 rounded-full"></div>
                       <div className=' flex flex-row '>
                       <CiCalendarDate  className=' text-lg lg:text-xl mr-2 text-sky-300'/> 
                       <h3 className='timeline-date mb-4 text-sky-300 '>09/2022 - 10/2023</h3>
                       </div>
                       <h4 className='timeline-title text-lg lg:text-xl mb-5 capitalize'>Higher National Diploma In Software EngIineering</h4>
                       <p className=' text-gray-400 text-sm lg:text-md'>Completed Software Engineering HND (Nov 2022 - Sep 2023). Acquired practical skills in software development, problem-solving, and teamwork, setting a strong foundation for a tech career.</p>
                    </div>

                     {/* timeline item */}
                     <div className="timeline-item relative pl-[37px] pb-0 before:[''] before:w-[1px] before:absolute before:h-full before:left-[7px] before:top-0 before:bg-red-500">
                       <div className="circle-dot absolute w-[15px] h-[15px] left-0 top-0 bg-red-500 rounded-full"></div>
                       <div className=' flex flex-row '>
                          <CiCalendarDate  className=' text-xl mr-2 text-sky-300'/> 
                          <h3 className='timeline-date mb-4 text-sky-300 '>04/2021 - 09/2022</h3>
                       </div>
                       <h4 className='timeline-title text-xl mb-5 capitalize'>Diploma in Computer System Design</h4>
                       <p className=' text-gray-400 text-sm lg:text-md'>Earned Computer System Design Diploma (Apr 2018 - Oct 2020). Developed expertise in system architecture, hardware-software integration, and project management for versatile tech proficiency.</p>
                    </div>

                  </div>
                 </div>
               </div>
           </motion.div>

           {/* Experience */}
         { /* <motion.div 
              initial={{ x: 200, opacity: 0 }} 
              whileInView={{
                x: 0,
                opacity: 1,
                delay: 1.5,
                transition: {duration: 1.4, ease: "easeInOut"}
              }}
              className=' text-white flex-1'>
               <h2 className=' mb-[30px] text-[24px]'>Experience</h2>
               <div className=''>
                 <div className='timeline-box flex-1 w-full '>
                  <div className='timeline py-[30px] px-[15px] border-2 border-slate-300 w-full relative rounded-lg	'>
                   
                    <div className="timeline-item relative pl-[37px] pb-[50px] before:[''] before:w-[1px] before:absolute before:h-full before:left-[7px] before:top-0 before:bg-red-500">
                       <div className="circle-dot absolute w-[15px] h-[15px] left-0 top-0 bg-red-500 rounded-full"></div>
                       <div className=' flex flex-row '>
                         <CiCalendarDate  className=' text-xl mr-2 text-sky-300'/> 
                         <h3 className='timeline-date mb-4 text-sky-300 '>2023 - 2024</h3>
                       </div>                  
                       <h4 className='timeline-title text-xl mb-5 capitalize'>Master in computing</h4>
                       <p className=' text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur perferendis excepturi iure reiciendis ullam nobis.</p>
                    </div>

                     <div className="timeline-item relative pl-[37px] pb-[50px] before:[''] before:w-[1px] before:absolute before:h-full before:left-[7px] before:top-0 before:bg-red-500">
                       <div className="circle-dot absolute w-[15px] h-[15px] left-0 top-0 bg-red-500 rounded-full"></div>
                       <div className=' flex flex-row '>
                       <CiCalendarDate  className=' text-xl mr-2 text-sky-300'/> 
                       <h3 className='timeline-date mb-4 text-sky-300 '>2023 - 2024</h3>
                       </div>
                       <h4 className='timeline-title text-xl mb-5 capitalize'>Master in computing</h4>
                       <p className=' text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur perferendis excepturi iure reiciendis ullam nobis.</p>
                    </div>

                     <div className="timeline-item relative pl-[37px] pb-0 before:[''] before:w-[1px] before:absolute before:h-full before:left-[7px] before:top-0 before:bg-red-500">
                       <div className="circle-dot absolute w-[15px] h-[15px] left-0 top-0 bg-red-500 rounded-full"></div>
                       <div className=' flex flex-row '>
                          <CiCalendarDate  className=' text-xl mr-2 text-sky-300'/> 
                          <h3 className='timeline-date mb-4 text-sky-300 '>2023 - 2024</h3>
                       </div>
                       <h4 className='timeline-title text-xl mb-5 capitalize'>Master in computing</h4>
                       <p className=' text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur perferendis excepturi iure reiciendis ullam nobis.</p>
                    </div>

                  </div>
                 </div>
               </div>
           </motion.div>*/}
           
        </div>
        
      </div>
    </section>
  )
}

export default AboutMe