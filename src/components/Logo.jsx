import {BiLogoMediumOld} from 'react-icons/bi'

const Logo = () => {
  return (
    <a href='#' className=' no-underline'>
      <div className=" flex flex-row items-center tracking-widest font-mono">
        <BiLogoMediumOld className=' text-5xl text-yellow-300'/> 
        <h1 className='text-3xl text-yellow-300'>ahel</h1>
      </div>
    </a> 
    )
}

export default Logo