import React, { useEffect, useState } from 'react'
import { FaMap } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
const Contact = ({ setFoot, setNav }) => {
    const [loading,setLoading] = useState(true);
    useEffect(() => {
        setFoot(true)
        setNav(true)
        setTimeout(() => {
            setLoading(false)
        }, 3000);
    }, [])
    return (
       <>
         {
            loading?<div className='p-5'>
            <div className='flex flex-col sm:flex-row w-full h-[60vh] '>
            <div className='w-full sm:w-[45%] flex justify-center items-start my-4 sm:my-0  flex-col gap-5 py-5 px-2'>
              <div className='w-[90%] h-6 bg-slate-200 rounded-sm animate-pulse'></div>
              <div className='w-full'>
               <div className='w-[50%] h-5 bg-slate-200 rounded-sm animate-pulse my-2'></div>
               <div className='w-[55%] h-5 bg-slate-200 rounded-sm animate-pulse my-2'></div>
               <div className='w-[60%] h-5 bg-slate-200 rounded-sm animate-pulse my-2'></div>
               <div className='w-[55%] h-5 bg-slate-200 rounded-sm animate-pulse my-2'></div>
               <div className='w-[50%] h-5 bg-slate-200 rounded-sm animate-pulse my-2'></div>
              </div>
             </div>
             <div className="bg-slate-200 h-full w-full sm:w-[55%] rounded-lg animate-pulse"></div>
            
            </div>
            </div>: <>
            <section className="flex justify-between h-screen
             flex-col sm:flex-row items-start  py-20 sm:py-20 sm:px-20">
                <div className="sm:w-[40%]">
                    <span className='text-base'>GET IN TOUCH</span>
                    <h2 className='text-3xl py-5'>Here's the location of our factory by which you reach out to us and discuss more about it.</h2>
                    <h3 className='text-base pb-4'>Marble Inlay Art Studio All India</h3>
                    <div>
                        <li className='py-3 flex list-none  items-center'>
                            <FaMap />
                            <p className='ml-2 text-base'>21/62/23 Telipara, Tajganj, Agra, Uttar Pradesh 282001</p>
                        </li>
                        <li className='py-3 flex list-none  items-center'>
                            <MdEmail />
                            <p className='ml-2 text-base'>akhan656500@gmail.com</p>
                        </li>
                        <li className='py-3 flex list-none  items-center'>
                            <FaPhoneAlt />
                            <p className='ml-2 text-base'>6398647656</p>
                        </li>
                        <li className='py-3 flex list-none  items-center '>
                            <FaClock />
                            <p className='ml-2 text-base'>Monday to Sunday: 9 am to 9 pm</p>
                        </li>

                    </div>
                </div>
                <div className="map w-full h-52 sm:h-96 sm:w-[55%]">
    <iframe
        className="h-full w-full"
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3456.646836126131!2d78.0452938!3d27.1632366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1234567890"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
</div>

            </section>
            {/* <section id="form-details" className='flex justify-between p-5 m-2 items-center flex-col sm:flex-row sm:m-16 sm:p-5 border border-slate-300 rounded-xl border-1'>
                <form action="" className='flex gap-2 w-full sm:w-[65%] flex-col '>
                    <span className='text-base my-3'>LEAVE A MESSAGE</span>
                    <h2 className='font-bold text-3xl my-3'>We Love To Hear From You.</h2>
                    <input type="text" placeholder="Your Name" className='w-full py-3 px-4 outline-none border border-1 border-slate-300 text-base rounded-xl' />
                    <input type="email" placeholder="Your E-mail" className='w-full py-3 px-4 outline-none border border-1 border-slate-300 text-base rounded-xl' />
                    <input type="text" placeholder="Subject" className='w-full py-3 px-4 outline-none border border-1 border-slate-300 text-base rounded-xl' />
                    <textarea name="" id="" cols="30" rows="10" placeholder="Your Message" className='w-full py-3 px-4 outline-none border border-1 border-slate-300 text-base rounded-xl'></textarea>
                    <button className='w-1/3 p-2 bg-slate-800 text-white border hover:bg-slate-600  duration-500 border-slate-800 hover:text-white my-5 mb-6'>Submit</button>


                </form>
                <div class="peaple">
                    <div className='pb-6 flex items-start'>
                        <img src="https://gauravssharma.github.io/Cara.in/peaple/1.png" alt="" className='w-16 h-16 object-cover mr-4' />
                        <p className='m-0 text-base leading-6'><span className='text-lg font-semibold block text-black'>John Doe</span>Senior marketing manager <br /> Phone:+000034352 <br />Email: xyz@gmail.com</p>
                    </div>
                    <div className='pb-6 flex items-start'>
                        <img src="https://gauravssharma.github.io/Cara.in/peaple/2.png" alt="" className='w-16 h-16 object-cover mr-4' />
                        <p className='m-0 text-base leading-6'><span className='text-lg font-semibold block text-black'>John Doe</span>Senior marketing manager <br /> Phone:+000034352 <br />Email: xyz@gmail.com</p>
                    </div>
                    <div className='pb-6 flex items-start'>
                        <img src="https://gauravssharma.github.io/Cara.in/peaple/3.png" alt="" className='w-16 h-16 object-cover mr-4' />
                        <p className='m-0 text-base leading-6'><span className='text-lg font-semibold block text-black'>John Doe</span>Senior marketing manager <br /> Phone:+000034352 <br />Email: xyz@gmail.com</p>
                    </div>
                </div>
            </section> */}
        </>
         }
       </>
    )
}

export default Contact