import React from 'react'

import {motion} from 'framer-motion'

import {RiHtml5Fill} from 'react-icons/ri'
import {TfiCss3} from 'react-icons/tfi'
import {TbBrandJavascript} from 'react-icons/tb'
import {FaReact} from 'react-icons/fa'
import {SiTailwindcss} from 'react-icons/si'
import {FaBootstrap} from 'react-icons/fa'


import {BsFiletypeSql} from 'react-icons/bs'
import {SiMongodb} from 'react-icons/si'
import {FaNodeJs} from 'react-icons/fa'
import {BsFiletypePhp} from 'react-icons/bs'


const containerVarients ={
  whileInView:{
      transition:{
          delayChildren: 0.1,
          staggerChildren: 0.4
      }
  }
}

const imgVarients ={
  initial:{
      opacity: 0,
      y: 100,
  },
  whileInView: () =>({
      opacity: 1,
      y: 0,
  })
}


const Experience = () => {
  return (
    <section id='skills' className=' lg:my-[80px] my-[50px] overflow-hidden h-auto font-mono bg-cover lg:bg-contain  bg-[url("https://github.githubassets.com/images/modules/site/home-campaign/bg-stars-1.webp")] '>
            <div className=' px-5 container mx-auto'>
            <div className=' my-[50px] lg:my-[10px]'>
        {/* header */}
        <motion.p 
        initial={{ x: -40,  opacity: 0 }} 
        whileInView={{
          x:0,
          opacity: 1,
          transition: {duration: 1.1, ease: "easeInOut"}
        }}
        viewport={{ once: true }}
        className=' text-slate-500 text-center text-sm lg:text-lg'>What Skills I Have</motion.p>
        <motion.h3 
          initial={{ x: 300, opacity: 0 }} 
          whileInView={{
            x: 0,
            opacity: 1,
            transition: {duration: 1.2, ease: "easeInOut"}
          }}
          viewport={{ once: true }}
         className="text-white text-center text-3xl lg:text-4xl overflow-hidden">
             Experience
        </motion.h3>  
        </div> 

         <div className=' flex flex-col my-8 lg:my-10 px-10 py-10 lg:px-32 lg:py-12 gap-8 lg:gap-14'>
            {/* front end */}
            <div className=''>
              <motion.h1 
                   initial={{ x: -300, opacity: 0 }} 
                   whileInView={{
                     x: 0,
                     opacity: 1,
                     delay: 0.5,
                     transition: {duration: 1.2, ease: "easeInOut"}
                   }}
                  viewport={{ once: true }}
              className=' border-t-[1px] border-b-[1px] text-white border-orange-400 w-full text-xl px-5 py-1 mb-5 text-center'>Frontend Developer</motion.h1>
              <motion.div 
                   variants={containerVarients}
                   initial="initial"
                   whileInView="whileInView"
                   viewport={{ once: true }}
              className=' mt-8 flex flex-row justify-evenly items-center flex-wrap gap-8 mobile:gap-4'>
                <motion.div 
                  variants={imgVarients}
                  className=' flex flex-col items-center bg-transparent mobile:w-36 mobile:h-36 w-40 h-36 rounded-lg justify-center gap-y-4'>
                  <RiHtml5Fill className=' text-6xl text-orange-500 animate-[skillIcons_5s_ease-in-out_infinite]'/>
                  <h1 className=' text-xl text-slate-200 capitalize'>Html</h1>
                </motion.div>
                <motion.div 
                  variants={imgVarients}
                  className=' flex flex-col items-center bg-transparent mobile:w-36 mobile:h-36 w-40 h-36 rounded-lg justify-center gap-y-4'>
                  <TfiCss3 className=' text-6xl text-sky-500 animate-[skillIcons_5s_ease-in-out_infinite]'/>
                  <h1 className=' text-xl text-slate-200 '>CSS</h1>
                </motion.div>
                <motion.div 
                  variants={imgVarients}       
                  className=' flex flex-col items-center bg-transparent mobile:w-36 mobile:h-36 w-40 h-36 rounded-lg justify-center gap-y-4'>
                  <TbBrandJavascript className=' text-6xl text-yellow-500 animate-[skillIcons_5s_ease-in-out_infinite]'/>
                  <h1 className=' text-xl text-slate-200 '>Java Script</h1>
                </motion.div>
                <motion.div 
                  variants={imgVarients}
                  className=' flex flex-col items-center bg-transparent mobile:w-36 mobile:h-36 w-40 h-36 rounded-lg justify-center gap-y-4'>
                  <FaReact className=' text-6xl text-sky-800 animate-[skillIcons_5s_ease-in-out_infinite]'/>
                  <h1 className=' text-xl text-slate-200 '>React</h1>
                </motion.div>
                <motion.div 
                  variants={imgVarients}          
                  className=' flex flex-col items-center bg-transparent mobile:w-36 mobile:h-36 w-40 h-36 rounded-lg justify-center gap-y-4'>
                  <SiTailwindcss className=' text-6xl text-blue-700 animate-[skillIcons_5s_ease-in-out_infinite]'/>
                  <h1 className=' text-xl text-slate-200 '>Tailwind CSS</h1>
                </motion.div>
                <motion.div 
                  variants={imgVarients}                
                  className=' flex flex-col items-center bg-transparent mobile:w-36 mobile:h-36 w-40 h-36 rounded-lg justify-center gap-y-4'>
                  <FaBootstrap className=' text-6xl text-purple-700 animate-[skillIcons_5s_ease-in-out_infinite]'/>
                  <h1 className=' text-xl text-slate-200 '>Bootstrap</h1>
                </motion.div>
            </motion.div>
            </div>
           

            {/* back end */}
            <div className=''>
              <motion.h1 
              initial={{ x: 300, opacity: 0 }} 
              whileInView={{
                x: 0,
                opacity: 1,
                delay: 0.5,
                transition: {duration: 1.2, ease: "easeInOut"}
              }}
             viewport={{ once: true }}
              className=' border-t-[1px] border-b-[1px] text-white border-orange-400 w-full text-xl px-5 py-1 mb-5 text-center'>Backend Developer</motion.h1>
              <motion.div 
                variants={containerVarients}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true }}
                className=' mt-8 flex flex-row justify-evenly items-center flex-wrap gap-8 mobile:gap-4'>
                <motion.div 
                 variants={imgVarients}          
                 className=' flex flex-col items-center bg-transparent mobile:w-36 mobile:h-36 w-40 h-36 rounded-lg justify-center gap-y-4'>
                  <BsFiletypeSql className=' text-6xl text-red-400 animate-[skillIcons_5s_ease-in-out_infinite]'/>
                  <h1 className=' text-xl text-slate-200 capitalize'>SQL</h1>
                </motion.div>
                <motion.div 
                 variants={imgVarients}          
                 className=' flex flex-col items-center bg-transparent mobile:w-36 mobile:h-36 w-40 h-36 rounded-lg justify-center gap-y-4'>
                  <SiMongodb className=' text-6xl text-green-400 animate-[skillIcons_5s_ease-in-out_infinite]'/>
                  <h1 className=' text-xl text-slate-200 '>MongoDB</h1>
                </motion.div>             
                <motion.div 
                 variants={imgVarients}          
                 className=' flex flex-col items-center bg-transparent mobile:w-36 mobile:h-36 w-40 h-36 rounded-lg justify-center gap-y-4'>
                  <BsFiletypePhp className=' text-6xl text-slate-500 animate-[skillIcons_5s_ease-in-out_infinite]'/>
                  <h1 className=' text-xl text-slate-200 '>Php</h1>
                </motion.div>
                <motion.div 
                 variants={imgVarients}          
                 className=' flex flex-col items-center bg-transparent mobile:w-36 mobile:h-36 w-40 h-36 rounded-lg justify-center gap-y-4'>
                  <FaNodeJs className=' text-6xl text-green-800 animate-[skillIcons_5s_ease-in-out_infinite]'/>
                  <h1 className=' text-xl text-slate-200 '>Node Js</h1>
                </motion.div>
            </motion.div>
            </div>


         </div>

            </div>
    </section>
  )
}

export default Experience