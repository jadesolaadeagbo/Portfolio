import React from 'react'
import backgroundImage from "../assets/background-image.svg"

export const About = () => {
  return (
    <div className='bg-about-gradient h-screen p-20 '>
        <div className='flex flex-col justify-center items-start h-[100%] slide-in-left'>
            <span className='bg-opaqueOrange text-white flex gap-2 px-3 py-2 rounded-md '><img src={backgroundImage} alt="" />Background </span>
            
            <p className='text-gray-400 font-sans leading-loose pt-10'>I craft digital experiences that seamlessly blend efficiency, aesthetics, and functionality. 
                As a front-end developer proficient in <span className='text-white'>React JS, Vue JS, Next JS, JavaScript, TypeScript, and Solidity. </span>  
                I transform visions into dynamic web interfaces that captivate the eye and enhance user interaction. 
                My expertise extends to <span className='text-white'>Firebase, Node JS, Bootstrap, TailwindCSS, Material UI, and Styled Components,</span>
                enabling me to bring brands to life by highlighting their unique character and emotion. 
                Every pixel and line of code is crafted with creativity and precision, 
                creating digital journeys that truly stand out.</p>
        </div>
    </div>
  )
}
