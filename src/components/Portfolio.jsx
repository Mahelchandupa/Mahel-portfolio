import {React, useState} from 'react'
import {motion} from 'framer-motion'


import {LiaArrowRightSolid} from 'react-icons/lia'
import {IoCloseSharp} from 'react-icons/io5'
import {MdKeyboardArrowLeft} from 'react-icons/md'
import {MdKeyboardArrowRight} from 'react-icons/md'

import { portfolioData } from '../data'

const Portfolio = () => {

  const [showProjectDetails, setShowProjectDetails] = useState(false);


  const [selectedProject, setSelectedProject] = useState(null);

  const handleIconClick = (id) => {
    setShowProjectDetails(true);
    setSelectedProject(portfolioData.find(project => project.id === id));
};

  const handleIconCloseClick = () =>{
    setShowProjectDetails(false)
  }

  
  const [currentIndex, setCurrentIndex] = useState(0)

  const prevImage = () =>{
    const isFirstImage = currentIndex === 0;
    const newIndex = isFirstImage ? selectedProject.screenShots.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex)
  }

  
  const nextImage = () =>{
    const isFirstImage = currentIndex === selectedProject.screenShots.length - 1;
    const newIndex = isFirstImage ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex)
  }
  

  return (
    <section id='portfolio' className=' lg:my-[100px] my-[50px] overflow-hidden h-auto font-mono bg-cover lg:bg-contain lg:bg-center  bg-[url("https://github.githubassets.com/images/modules/site/home-campaign/bg-stars-1.webp")] '>
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
        className=' text-slate-500 text-center text-sm lg:text-lg'>My All Works</motion.p>
        <motion.h3 
        initial={{ x: 300, opacity: 0 }} 
        whileInView={{
            x: 0,
            opacity: 1,
            transition: {duration: 1.2, ease: "easeInOut"}
        }}
        viewport={{ once: true }}
        className="text-white text-center text-3xl lg:text-4xl overflow-hidden">
            Portfolio
        </motion.h3>  
    </div> 

       <motion.div className='lg:my-[80px] my-[50px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[1.5rem] lg:gap-[2.5rem] '>
      
       {
            portfolioData.map(({id, image, title}) => {
              return(
               <motion.article 
                 key={id} 
                 initial={{ y: 200,  opacity: 0 }} 
                 whileInView={{
                 y:0,
                 opacity: 1,
                 transition: {duration: 1.1, ease: "easeInOut"}
                 }}
                viewport={{ once: true }}               
                 className='portfolio_item bg-neutral-900 p-[1.4rem] rounded-2xl border-2 border-solid border-transparent hover:border-neutral-900 hover:bg-transparent transition duration-300 ease-in-out'>
                    <div className="portfolio_item-image rounded-2xl overflow-hidden">
                       <img src={image} alt=""  className=' w-full h-auto object-center'/>
                    </div>
               <h3 className=' text-white my-4 text-xl font-bold'>{title}</h3>
               <div className='portfolio_item-cta'>
               <div onClick={() => handleIconClick(id)} className='cursor-pointer flex flex-row gap-2 items-center text-red-700 font-bold text-sm'>
                   <p className='text-[16px]'>Demo</p>
                   <LiaArrowRightSolid className='text-xl' />
              </div>            
               </div>
           </motion.article>
              )
            })
          }

           {showProjectDetails && (
                    <div className=' fixed flex justify-center items-center z-40 bg-gray-900 bg-opacity-50 left-0 top-0 w-full h-full transition duration-400 ease-in-out'>
                        
                    
                {
                    selectedProject && (
                 
                    <motion.div 
                    initial={{ y: 100,  opacity: 0 }} 
                    whileInView={{
                    y:0,
                    opacity: 1,
                    transition: {duration: 0.7, ease: "easeInOut"}
                    }}
                       className=' relative px-6 py-10 lg:p-8 rounded-[5px] text-white bg-slate-800 w-[80%] lg:w-[60%] mx-auto'>
                        <div className=' flex lg:flex-row flex-col lg:gap-x-5 lg:gap-y-3 gap-3 w-full justify-between'>
                           <div  onClick={handleIconCloseClick} className='absolute right-4 top-2 text-red-600 text-2xl cursor-pointer'>
                              <IoCloseSharp/>
                           </div>                             
                           <div className=' relative flex-1 rounded-[5px]  w-full h-full group '>
                             <img src={selectedProject.screenShots[currentIndex].img} className=' w-full h-[250px] lg:h-[340px] rounded-[5px] object-cover border-[1px] border-slate-500 transition duration-500' alt="" />
                             <div className=' hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl text-white bg-black bg-opacity-75 rounded-full p-2 cursor-pointer'>
                                <MdKeyboardArrowLeft  onClick={prevImage}/>
                             </div>
                             <div className=' hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl text-white bg-black bg-opacity-75 rounded-full p-2 cursor-pointer'>
                                <MdKeyboardArrowRight onClick={nextImage}/>
                             </div>
                        
                           </div>
                           <div className=' flex-1 w-full h-full'>
                             <h1 className=' text-white font-bold text-2xl text-center lg:text-left'>{selectedProject.title}</h1>
                             <p className=' text-slate-400 text-sm my-4 hidden lg:block text-center lg:text-left'>{selectedProject.desc}</p>
                             <div className=' mt-6 text-slate-400 '>
                                <p className='mb-3 text-center lg:text-left'><span className=' text-slate-200'>Technology -</span> {selectedProject.technology}</p>
                                <p className=' mb-3 text-center lg:text-left'><span className=' text-slate-200'>Role -</span> {selectedProject.role}</p>
                                <div className='flex flex-row justify-center lg:justify-start gap-6 mt-6 lg:mt-10'>
                                    <a className=' bg-orange-700 hover:bg-transparent hover:border-orange-700 transition duration-300 ease-in-out border-2 border-transparent w-[120px] flex items-center justify-center py-2  rounded-3xl cursor-pointer text-white' href={selectedProject.demo} rel='noopener noreferrer' target='_blank'>Visit</a>
                                    <a className=' bg-sky-700 hover:bg-transparent hover:border-sky-700 transition duration-300 ease-in-out border-2 border-transparent w-[120px] flex items-center justify-center py-2  rounded-3xl cursor-pointer text-white'  href={selectedProject.github} rel='noopener noreferrer' target='_blank'>Github</a>
                                </div>
                             </div>
                           </div>
                        </div>
                    </motion.div>
                    
                    )
                }     
                    
                </div>
            )}
       </motion.div>

    </div>
</section>
  )
}

export default Portfolio