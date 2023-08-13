import {motion} from 'framer-motion'

const BgAnimation = () => {
  return (
    <>
    <motion.div
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
       className=" bg-slate-950 bg-center bg-contain h-screen bg-[url('https://github.githubassets.com/images/modules/site/home-campaign/bg-stars-1.webp')]  z-0 absolute left-0 top-0 ">
       </motion.div>
    </>
  )
}

export default BgAnimation