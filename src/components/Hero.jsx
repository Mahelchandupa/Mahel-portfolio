import {React} from 'react'
import {motion} from 'framer-motion'
import { TypeAnimation } from 'react-type-animation';

import CV from '../../src/assest/Mahel Chandupa.pdf'



import Image from '../assest/Web-development_-programmer-engineering-and-coding-website-on-augmented-reality-interface-screens-on-transparent-background-PNG-removebg-preview.png'

const Hero = () => {

  return (
    <motion.section id=''
    initial={{
      width: 0
    }}
    animate={{
      width: "100vw"
    }}
    transition={{
      duration: 1.1,
      ease: "easeInOut",
      delay: 0.2,
    }}
    className=" bg-slate-950 w-full h-screen flex items-center overflow-hidden bg-center bg-contain bg-[url('https://github.githubassets.com/images/modules/site/home-campaign/bg-stars-1.webp')]">
      <div  className=' container mx-auto'>   
        <div className='px-5  flex flex-col justify-center lg:flex-row lg:justify-evenly items-center'> 
           {/* text */}
           <motion.div 
              initial={{ x: -400, opacity: 0 }}  // Start from 20px above its normal position
              animate={{ x: 0, opacity: 1 }}     // Move to normal position
              transition={{ 
               duration: 0.9,
               delay: 1.4,
              }}
              className=' text-white font-mono mb-5 '>
              <h1 className=' font-mono text-5xl lg:text-7xl xl:text-8xl mb-5 lg:mb-3 lg:text-left text-center md:text-center min-[320px]:text-4xl'>Hi,I'm Mahel</h1>
              <p className=' text-center lg:text-left text-2xl md:text-2xl lg:text-4xl text-yellow-400 min-[320px]:text-xl'><TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Software Engineer',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Frontend Developer',
        1000,
        'Backend Developer',
        1000,
      ]}
      speed={50}
      // style={{ fontSize: '2em', display: 'inline-block', color: 'yellow', textAlign: 'center'}}
      repeat={Infinity}
    /></p>
              <p className=' leading-loose text-md lg:text-xl text-gray-400 lg:w-[600px] lg:text-justify text-center lg:mt-3 min-[300px]:text-[0.7rem] max-[450px]:text-md'>
               Hello and welcome to my portfolio! I am an undergraduate software engineering student with a passion for coding and problem-solving. 
               My focus is on web app development.
               </p>
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
                class=" flex items-center justify-center lg:justify-start my-5 lg:my-5">
                    <a class="text-black  px-4 py-3 bg-[#4db5ff] rounded-md hover:bg-transparent hover:border hover:border-white hover:text-white cursor-pointer transition ease-in-out" href={CV} download>Download CV</a>
              </motion.div> 
           </motion.div>
           {/* image */}
           <motion.div
              initial={{ x: 400, opacity: 0 }}  // Start from 20px above its normal position
              animate={{ x: 0, opacity: 1 }}     // Move to normal position
              transition={{ 
               duration: 0.9,
               delay: 1.5,
             }}
             className='  overflow-hidden '
           >
           <img  
               className='sm:w-[80%] md:w-[80%] lg:w-[100%] mx-auto h-auto animate-[updown_5s_ease-in-out_infinite] min-[320px]:w-[270px] min-[320px]:h-auto'
               src={Image}
               alt=""
            />

           </motion.div>
        </div>
      </div>

        {/* <img alt="" aria-hidden="true" width="2712" height="2712" loading="lazy" decoding="async" src="https://github.githubassets.com/images/modules/site/home-campaign/bg-stars-1.webp"></img> */}
    </motion.section>
  )
}

export default Hero