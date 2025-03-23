import React, { useEffect, useState } from 'react'

const About = ({setNav,setFoot}) => {
  const [loading ,setLoading] = useState(true);
  useEffect(()=>{
    setFoot(true)
    setNav(true)
   setTimeout(() => {
    setLoading(false)
   }, 3000);
  })
  return (
  <>
     {
      loading?<div className=' p-5 sm:p-10'>
         <div className='flex flex-col sm:flex-row w-full h-[70vh] '>
          <div className="bg-slate-200 h-full w-full sm:w-1/2 rounded-lg animate-pulse"></div>
          <div className='w-full sm:w-1/2 flex justify-center items-start my-4 sm:my-0 sm:p-10 flex-col gap-5'>
           <div className='w-[60%] h-9 bg-slate-200 rounded-lg animate-pulse'></div>
           <div className='w-full'>
            <div className='w-full h-5 bg-slate-200 rounded-lg animate-pulse my-2'></div>
            <div className='w-full h-5 bg-slate-200 rounded-lg animate-pulse my-2'></div>
            <div className='w-full h-5 bg-slate-200 rounded-lg animate-pulse my-2'></div>
            <div className='w-full h-5 bg-slate-200 rounded-lg animate-pulse my-2'></div>
            <div className='w-full h-5 bg-slate-200 rounded-lg animate-pulse my-2'></div>
           </div>

          </div>
         </div>
      </div>:<>
      <section id="about-head" className="flex    flex-col sm:flex-row items-center p-5 sm:p-10">
      <img src="https://jugyah-dev-property-photos.s3.ap-south-1.amazonaws.com/marble_floor_design_02_png_95410ebd34.webp" className='w-full sm:w-1/2 h-1/2' alt="marble"/>
      <div className='sm:pl-[50px] w-full sm:w-1/2 py-5'>
       <h2 className='font-bold text-[2rem] sm:text-[3rem]'>Who We Are ?</h2>
       <p>A skilled marble contractor specializes in providing high-quality marble designs for floors, stairs, walls, countertops, and more. They offer a wide selection of marble styles, colors, and finishes to match any aesthetic, from classic to modern. These contractors combine craftsmanship with advanced tools to deliver precise installations, ensuring durability and elegance. With expertise in customization, they create unique patterns, inlays, and textures to enhance any space. Additionally, they guide clients in selecting the best marble type for specific applications, balancing beauty and functionality. 
       </p>
       <br/>
       <abbr title="" className='my-4 font-semibold'>Provide the good finishing marbles towards you with our efficient working on it.</abbr>
       <br/><br/>
       <marquee bgcolor="#ccc" loop="-1" scrollamount="5" width="100%">! Provide You The Affordable Marbles, Designs and Materials To You In Efficient Cost !</marquee>
      </div>
   </section>
   <section id="about-app" className="p-5 sm:p-10  text-center ">
     <h1 className='text-[2rem] font-bold sm:text-[3rem]'>Download Our <a href="" className='text-blue-800 decoration-slate-800'>App</a></h1>
     <div className="video w-full sm:w-[70%] h-full mt-[30px] mx-auto">
     <video autoPlay muted loop src="" className='w-full h-full rounded-2xl'></video>

     </div>
    </section>
   </>
     }
  </>
  )
}

export default About