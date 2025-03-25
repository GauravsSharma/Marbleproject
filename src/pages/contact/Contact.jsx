import React, { useEffect, useState } from 'react'
import { FaMap } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
const Contact = ({ setFoot, setNav }) => {
    const [loading, setLoading] = useState(true);
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
                loading ? (
                    <div className="p-5">
                        <div className="flex flex-col sm:flex-row w-full h-[60vh]">
                            <div className="w-full sm:w-[45%] flex flex-col gap-5 my-4 sm:my-0 py-5 px-2">
                                <div className="w-[90%] h-6 bg-slate-200 rounded-sm animate-pulse"></div>
                                <div className="w-full">
                                    <div className="w-[50%] h-5 bg-slate-200 rounded-sm animate-pulse my-2"></div>
                                    <div className="w-[55%] h-5 bg-slate-200 rounded-sm animate-pulse my-2"></div>
                                    <div className="w-[60%] h-5 bg-slate-200 rounded-sm animate-pulse my-2"></div>
                                    <div className="w-[55%] h-5 bg-slate-200 rounded-sm animate-pulse my-2"></div>
                                    <div className="w-[50%] h-5 bg-slate-200 rounded-sm animate-pulse my-2"></div>
                                </div>
                            </div>
                            <div className="bg-slate-200 h-full w-full sm:w-[55%] rounded-lg animate-pulse"></div>
                        </div>
                    </div>
                ) : (
                    <>
                        <section className="flex flex-col-reverse sm:flex-row justify-between h-auto sm:h-screen items-start py-10 sm:py-20 px-5 sm:px-20">
                            <div className="w-full sm:w-[40%] flex flex-col gap-5">
                                <span className="text-base font-medium text-gray-600">GET IN TOUCH</span>
                                <h2 className="text-2xl sm:text-3xl font-semibold py-3">
                                    Here's the location of our factory where you can reach out to us and discuss more about it.
                                </h2>
                                <h3 className="text-base font-medium text-gray-500">Marble Inlay Art Studio All India</h3>
                                <div className="space-y-4">
                                    <li className="flex items-center text-gray-600">
                                        <FaMap className="text-lg" />
                                        <p className="ml-3 text-base">21/62/23 Telipara, Tajganj, Agra, Uttar Pradesh 282001</p>
                                    </li>
                                    <li className="flex items-center text-gray-600">
                                        <MdEmail className="text-lg" />
                                        <p className="ml-3 text-base">akhan656500@gmail.com</p>
                                    </li>
                                    <li className="flex items-center text-gray-600">
                                        <FaPhoneAlt className="text-lg" />
                                        <p className="ml-3 text-base">6398647656</p>
                                    </li>
                                    <li className="flex items-center text-gray-600">
                                        <FaClock className="text-lg" />
                                        <p className="ml-3 text-base">Monday to Sunday: 9 am to 9 pm</p>
                                    </li>
                                </div>
                            </div>
                            <div className="map w-full h-52 sm:h-96 sm:w-[55%] rounded-lg overflow-hidden shadow-lg">
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
                    </>
                )
     }

        </>
    )
}

export default Contact