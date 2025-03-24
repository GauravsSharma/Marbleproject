import React, { useState,useEffect } from 'react'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';

import { FiLoader } from 'react-icons/fi';
const Carousel = () => {
    const [loading, setLoading] = useState(true);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth <= 638); // Adjust the breakpoint as needed
      };
  
      handleResize(); // Set initial value
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
  
    const slides = [
        {
            url: "https://github.com/Akbarkhan2266/images/blob/main/loop1.png?raw=true",
        },
        {
            url: "https://github.com/Akbarkhan2266/images/blob/main/loop2.png?raw=true"
        },
        {
            url: "https://github.com/Akbarkhan2266/images/blob/main/loop3.png?raw=true"
        },
       
    ]
    const mobileImages = [
        {url: "https://i0.wp.com/pandeymoorti.com/wp-content/uploads/2023/08/marble-matki-handicraft-3-1.jpg?fit=800%2C800&ssl=1"},
        {url: "https://i.redd.it/marble-handicrafts-of-jaipur-v0-r0fdutzos96c1.jpg?width=1224&format=pjpg&auto=webp&s=ecee8b865965a7ac9d8288fad33b1ef28cbd6848"}
     ]
     const images = isMobile ? mobileImages : slides;
    const [currentIdx, setCurrIdx] = useState(0);
    const setPrev = () => {
        const firstSlide = currentIdx === 0;
        const newIndex = firstSlide ? images.length - 1 : currentIdx - 1
        setCurrIdx(newIndex);
    }
    const setNext = () => {
        const firstSlide = currentIdx === images.length - 1;
        const newIndex = firstSlide ? 0 : currentIdx + 1
        setCurrIdx(newIndex);
    }
    useEffect(() => {
        const intervalId = setInterval(() => {
          setNext(); // Automatically move to the next image every 3 seconds
        }, 3000);
    
        return () => {
          clearInterval(intervalId); // Clear the interval when the component unmounts or changes
        };
      }, [currentIdx]);
    
    return (
        <>
            <div className='max-w-[1400px] h-[500px] w-full relative top-0 group'>
                <div style={{ backgroundImage: `url(${images?.[currentIdx]?.url})`, width: "100%", height: "100%", transition: "1000ms", backgroundRepeat: "no-repeat",backgroundSize:"cover",backgroundPosition:"center"}} className='duration-100 relative top-0'>
                </div>
                <div className='hidden group-hover:block absolute top-[45%] -translate-x-0 -translate-y-[-50%] left-5 text-2xl  rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                    <BsChevronCompactLeft onClick={setPrev} size={30} />
                </div>
                <div className='hidden group-hover:block absolute top-[45%] -translate-x-0 -translate-y-[-50%] right-5 text-2xl  rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                    <BsChevronCompactRight onClick={setNext} size={30} />
                </div>
            </div>
        </>
    )
}

export default Carousel