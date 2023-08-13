import {React, useState, useEffect} from 'react'

import {SlArrowUp} from 'react-icons/sl'

const ScrollTop = () => {

  const [arrowUp, setArrowUp] = useState(false)
 
  useEffect(() =>{
    window.addEventListener('scroll', () =>{
        if(window.pageYOffset > 100){
            setArrowUp(true)
        }
        else{
            setArrowUp(false)
        }
    })
  },[])

  const scrollUp = () =>{
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
  }

  return (
    <div onClick={scrollUp} className={`${arrowUp === true ? ' lg:bottom-[100px] bottom-[70px] opacity-100 pointer-events-auto' : ' bottom-[60px] lg:bottom-[90px] opacity-0'} flex justify-center items-center w-10 h-10 rounded-full bg-slate-100 fixed right-[40px] bottom-[60px] lg:right-[100px] lg:bottom-[90px] transition duration-400 ease-in-out z-20 cursor-pointer`}>
       <SlArrowUp  className=' text-lg text-black'/>
    </div>
  )
}

export default ScrollTop