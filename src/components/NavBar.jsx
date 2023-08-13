import { useState } from "react";

import Logo from "./Logo";
import {CgMenu} from 'react-icons/cg'
import {CgClose} from 'react-icons/cg'

import { motion, AnimatePresence, delay} from 'framer-motion'

export const Navbar = () => {

    
    const [menuIconClick, setMenuIconClick] = useState(false);

    const [navColor, setNavColor] = useState(false);

    const handleColorChange = () =>{
        if(window.scrollY > 90){
            setNavColor(true)
        }
        else{
            setNavColor(false)
        }
    }

    window.addEventListener("scroll", handleColorChange);

    
    const mobilNavVarient = {
        exit: {
            x: 300,
            opacitiy: 0,
            transition: {
                duration: 0.3,
                ease: "easeInOut",
                delay: .6
            }
        }
    }

    const ulVarient = {
        transition: {
            delayChildren: 1,
            staggerChildren: 0.18
        },
        exit: {
            transition: {
              staggerChildren: 0.06,
              staggerDirection: -1
            }
        }
    }

    const liVariant = {
        initial: {
            y: 90,
            opacity: 0,
        },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                delay: 4,
                duration: 0.25,
                ease: "easeInOut"
            }
        },
        exit: {
            opacity: 0,
            y: 90,
            transition: {
                duration: 0.25,
                ease: "easeInOut"
            }
        }
    }


    return(
    <nav className={`${navColor === true ? 'bg-slate-900 bg-contain bg-center bg-[url("https://github.githubassets.com/images/modules/site/home-campaign/bg-stars-1.webp")]' : 'bg-transparent'} h-[100px] lg:h-[90px] w-full font-mono fixed top-0 left-0 z-30 transition duration-300 ease-in`}>
      <motion.div
       initial={{
        y: -100
      }}
      animate={{
        y: 0
      }}
      transition={{
        delay: 1.3,
        type:"spring",
        stiffness: 110,
      }}
       className="px-5 flex justify-between items-center pt-6 container mx-auto text-black ">
        <Logo />
        {/* desktop links */}
        <ul className=" hidden lg:flex flex-row gap-x-12 text-xl text-white">
                <li className=" relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">
                    <a href="#">Home</a>
                </li>
                <li className=" relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">
                    <a href="#about">About</a>
                </li>
                <li className=" relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">
                    <a href="#skills">Experience</a>
                </li>
                <li className=" relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">
                    <a href="#portfolio">Portfolio</a>
                </li>
                <li className=" relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">
                    <a href="#contact">Contact</a>
                </li>
        </ul>
        <div onClick={ () => {setMenuIconClick(true)}} className="lg:hidden flex justify-center items-center bg-slate-800 hover:bg-slate-900 transition rounded-full w-16 h-16 cursor-pointer">
          <CgMenu className=" w-8 h-8 text-white cursor-pointer"/>
        </div>

      </motion.div>
      {/* mobile nav links */}  
      <AnimatePresence>
      {
        menuIconClick && (
            
            <motion.div 
            variants={mobilNavVarient}
            initial={{x: 300, opacity: 0}}
            animate={{x:0, opacity: 1}}
            transition={{duration: .3}}
            exit="exit"
            className={`lg:hidden fixed top-0 w-[300px] right-0 bg-[url('https://github.githubassets.com/images/modules/site/home-campaign/bg-stars-1.webp')] bg-center bg-contain h-[100vh] bg-sky-950 z-10 `}>
                <motion.ul 
                   variants={ulVarient}
                   className=" overflow-hidden py-72 flex flex-col justify-center items-center gap-y-10 text-xl text-white">
                    <motion.li 
                    variants={liVariant}
                    onClick={ () => {setMenuIconClick(false)}}
                    className="relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
                    >
                        <a href="#" rel='noopener noreferrer'>Home</a>
                    </motion.li>
                    <motion.li 
                    variants={liVariant}
                    onClick={ () => {setMenuIconClick(false)}} 
                    className="relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
                    >
                        <a href="#about">About</a>
                    </motion.li>
                    <motion.li 
                    variants={liVariant}
                    onClick={ () => {setMenuIconClick(false)}}
                    className="relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
                    >
                        <a href="#skills">Experience</a>
                    </motion.li>
                    <motion.li 
                    variants={liVariant}
                    onClick={ () => {setMenuIconClick(false)}}
                    className="relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
                    >
                        <a href="#portfolio">Portfolio</a>
                    </motion.li>
                    <motion.li 
                    variants={liVariant}
                    onClick={ () => {setMenuIconClick(false)}}
                    className="relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
                    >
                        <a href="#contact">Contact</a>
                    </motion.li>
                </motion.ul>
                <CgClose onClick={ () => {setMenuIconClick(false)}}  className=" absolute right-8 top-8 w-8 h-8 text-white cursor-pointer hover:text-red-500 transition duration-300 ease-in"/>
        </motion.div>  
        )
      }
      </AnimatePresence>
      <div onClick={ () => {setMenuIconClick(false)}}  className={`${menuIconClick ? 'block' : 'hidden'} w-full h-full fixed bg-black bg-opacity-75 z-5`}></div>
    </nav>
    
    )
}
export default Navbar;