import React from 'react'

import {motion} from 'framer-motion'

import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {FaLinkedin} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'

import Logo from './Logo'

const Footer = () => {
  return (
    <footer className=' font-mono mt-[50px] lg:mt-[80px] p-[3rem] text-center bg-slate-950 bg-cover lg:bg-contain lg:bg-center  bg-[url("https://github.githubassets.com/images/modules/site/home-campaign/bg-stars-1.webp")]'>
      <motion.div 
      initial={{y: 20, opacity: 0}}
      whileInView={{
        y: 0,
        opacity: 1,
        transition: {duration: 1.3, ease: "easeInOut"}
      }}
      className=' flex justify-center mb-[2rem]'>
        <Logo />
      </motion.div>

      <motion.ul 
      initial={{y: 20, opacity: 0}}
      whileInView={{
        y: 0,
        opacity: 1,
        transition: {duration: 1.3, ease: "easeInOut", delay: 0.5}
      }}
      className=' flex flex-wrap lg:flex-row flex-col justify-center gap-[1.5rem] lg:gap-[2rem] m-auto mb-12'>
        <li><a className=' text-xl text-sky-500 transition duration-300 ease-in-out hover:text-slate-200' href="#">Home</a></li>
        <li><a className=' text-xl text-sky-500 transition duration-300 ease-in-out hover:text-slate-200' href="#about">About</a></li>
        <li><a className=' text-xl text-sky-500 transition duration-300 ease-in-out hover:text-slate-200' href="#skills">Experience</a></li>
        <li><a className=' text-xl text-sky-500 transition duration-300 ease-in-out hover:text-slate-200' href="#portfolio">Portfolio</a></li>
        <li><a className=' text-xl text-sky-500 transition duration-300 ease-in-out hover:text-slate-200' href="#contact">Contact</a></li>
      </motion.ul>

      <motion.div 
       initial={{y: 20, opacity: 0}}
       whileInView={{
         y: 0,
         opacity: 1,
         transition: {duration: 1.3, ease: "easeInOut", delay: 0.7}
       }}
      className=" flex justify-center gap-[1rem] mb-[2.6rem] lg:mb-[4rem]">
        <a 
        className=' p-[0.8rem] rounded-full flex bg-transparent text-white text-xl border-[1px] border-sky-800 hover:bg-sky-800 hover:border-transparent transition duration-300 ease-in-out animate-[footerSocialIcons_5s_ease-in-out_infinite]' href="https://www.facebook.com/mahel.chandupa?mibextid=ZbWKwL" rel='noopener noreferrer' target='_blank'><FaFacebookF/>
        </a>
        <a 
        className=' p-[0.8rem] rounded-full flex bg-transparent text-white text-xl border-[1px] border-sky-800 hover:bg-sky-800 hover:border-transparent transition duration-300 ease-in-out animate-[footerSocialIcons_5s_ease-in-out_infinite]' href="https://instagram.com/mahel_chandupa?igshid=ZDdkNTZiNTM=" rel='noopener noreferrer' target='_blank'><FiInstagram/>
        </a>
        <a 
        className=' p-[0.8rem] rounded-full flex bg-transparent text-white text-xl border-[1px] border-sky-800 hover:bg-sky-800 hover:border-transparent transition duration-300 ease-in-out animate-[footerSocialIcons_5s_ease-in-out_infinite]' href="#" rel='noopener noreferrer' target='_blank'><FaGithub/>
        </a>
        <a 
        className=' p-[0.8rem] rounded-full flex bg-transparent text-white text-xl border-[1px] border-sky-800 hover:bg-sky-800 hover:border-transparent transition duration-300 ease-in-out animate-[footerSocialIcons_5s_ease-in-out_infinite]' href="#" rel='noopener noreferrer' target='_blank'><FaLinkedin/>
        </a>
      </motion.div>
 
      <motion.div 
       initial={{y: 20, opacity: 0}}
       whileInView={{
         y: 0,
         opacity: 1,
         transition: {duration: 1.3, ease: "easeInOut", delay: 0.9}
       }}
      className=" mb-[2rem] text-slate-300 text-lg">
        <small>&copy; Mahel Chandupa. All rights reserved.</small>
      </motion.div>

    </footer>   )
}

export default Footer