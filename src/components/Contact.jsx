import {motion} from 'framer-motion'

import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "6f877265-2f74-4893-a40f-2b162bbda2c8");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res)
      showMessage()
    }

  };

  const showMessage = () => {
    toast.success("Thank You !")
  }

  return (
    <section id='contact' className=' overflow-hidden py-[50px] lg:py-[100px] lg:h-auto font-mono bg-cover lg:bg-contain bg-center bg-[url("https://github.githubassets.com/images/modules/site/home-campaign/bg-stars-1.webp")] '>
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
      
      className=' text-slate-500 text-center text-sm lg:text-lg'>Get in Touch</motion.p>
      <motion.h3 
        initial={{ x: 300, opacity: 0 }} 
        whileInView={{
          x: 0,
          opacity: 1,
          transition: {duration: 1.2, ease: "easeInOut"}
        }}
        viewport={{ once: true }}
       className="text-white text-center text-3xl lg:text-4xl overflow-hidden">
           Contact Me
      </motion.h3>  
      </div>  
         
          
      <div className=" lg:w-[70%] lg:my-[80px] my-[50px] lg:mx-auto grid lg:grid-cols-[30%,50%] grid-cols-1 gap-[2rem] lg:gap-[12%] text-white">
        <motion.div
          initial={{ x: -100, opacity: 0 }} 
          whileInView={{
            x: 0,
            opacity: 1,
            transition: {duration: 1.3, ease: "easeInOut"}
          }}
          viewport={{ once: true }}
         className="flex flex-col gap-[1.2rem]">
          <article className=' bg-blue-950 p-[1.2rem] border-[1px] border-transparent rounded-[1.2rem] text-center hover:bg-transparent hover:border-[#2c2c6c]'>
              <div className=' flex justify-center'>
                <MdOutlineEmail className=' font-bold text-[1.4rem] mb-4'/>
              </div>
              <h4 className=' lg:text-xl text-lg font-bold'>Email</h4>
              <h5 className=' mt-2 text-[0.9rem]'>mahelchandupa1013@gmail.com</h5>
              <a  className=" cursor-pointer hover:text-sky-300 tansition duration-300 text-blue-700 mt-[0.7rem] inline-block text-[1rem]" href="mailto:mahelchandupa1013@gmail.com" rel='noopener noreferrer' target='_blank'>Send a message</a>
          </article>

          <article className=' bg-blue-950 p-[1.2rem] border-[1px] border-transparent rounded-[1.2rem] text-center hover:bg-transparent hover:border-[#2c2c6c]'>
              <div className=' flex justify-center'>
                <RiMessengerLine className=' font-bold text-[1.4rem] mb-4'/>
              </div>
              <h4 className=' lg:text-xl text-lg font-bold'>Messenger</h4>
              <h5 className=' mt-2 text-[0.9rem]'>mahel</h5>
              <a  className=" cursor-pointer hover:text-sky-300 tansition duration-300 text-blue-700 mt-[0.7rem] inline-block text-[1rem]" href="https://m.me/mahel.chandupa" rel='noopener noreferrer' target='_blank' >Send a message</a>
          </article>

          <article className=' bg-blue-950 p-[1.2rem] border-[1px] border-transparent rounded-[1.2rem] text-center hover:bg-transparent hover:border-[#2c2c6c]'>
              <div className=' flex justify-center'>
                <BsWhatsapp className=' font-bold text-[1.4rem] mb-4'/>  
              </div>
              <h4 className=' lg:text-xl text-lg font-bold'>WhatsApp</h4>
              <h5 className=' mt-2 text-[0.9rem]'>+94789092063</h5>
              <a  className=" cursor-pointer hover:text-sky-300 tansition duration-300 text-blue-700 mt-[0.7rem] inline-block text-[1rem]" href="https://api.whatsapp.com/send?phone=94789092063" rel='noopener noreferrer' target='_blank'>Send a message</a>
          </article>

        </motion.div>

        <motion.form 
           onSubmit={onSubmit}
           initial={{ x: 100, opacity: 0 }} 
           whileInView={{
             x: 0,
             opacity: 1,
             transition: {duration: 1.4, ease: "easeInOut"}
           }}
           viewport={{ once: true }}
          className=' flex flex-col gap-[1.2rem]'>
           <input className=' w-full p-[1.5rem] rounded-[0.5rem] bg-transparent border-2 border-[#2c2c6c] text-white ' type="text" name='name' placeholder='Your Full Name' required />
           <input className=' w-full p-[1.5rem] rounded-[0.5rem] bg-transparent border-2 border-[#2c2c6c] text-white ' type="email" name="email" id="" placeholder='Your Email' required />
           <textarea className=' w-full p-[1.5rem] rounded-[0.5rem] bg-transparent border-2 border-[#2c2c6c] text-white ' name="message" id="" rows="7" placeholder='Your Message' required></textarea>
           <button type='submit' className='max-w-max inline-block bg-[#4db5ff] text-[#1f1f38] py-[0.7rem] px-[1.2rem] cursor-pointer border-[1px] border-[#4db5ff] transition duration-300 ease-in-out rounded-[0.4rem] hover:bg-white hover:text-[#1f1f38] hover:border-transparent '>Send Message</button>
        </motion.form>

      </div>
      <ToastContainer position="top-right" autoClose={500} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="dark"/>
    </div>
  </section>  )
}

export default Contact