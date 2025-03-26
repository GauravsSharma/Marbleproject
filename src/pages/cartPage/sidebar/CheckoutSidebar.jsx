import React from 'react'
import { TbTruckDelivery } from "react-icons/tb";
import { LuBadgePercent } from "react-icons/lu";
import { useFirebase } from '../../../firebase/FirebaseContext';
import { FaWhatsapp } from "react-icons/fa";
import toast, { Toaster } from 'react-hot-toast'
import { useAppwrite } from '../../../appwrite/AppwriteContext';
import { FiMessageCircle } from 'react-icons/fi';
const CheckoutSidebar = ({ calculateOriginalPrice, calculateSubTotal, setISCheckoutShow, isCheckoutShow,allImages }) => {
  const {loggedInUser ,sendMessage} = useAppwrite()
  const handleCheckout = () => {
    if (loggedInUser) {
      sendMessage(loggedInUser.name,allImages,calculateOriginalPrice())
    }
    else {
      toast.error("Please login first");
    }
  }
  
  return (
    <div className="right sm:p-10 w-full h-auto sm:w-[30%] sm:border-l-2">
      <h1 className='my-5 text-base font-semibold sm:text-2xl'>Price Details</h1>
      <div className='flex justify-between border-b-2 border-slate-200 items-center py-0 sm:py-3  sm:text-base'>
        <h2>Total MRP</h2>
        <h2>₹{calculateOriginalPrice()}.00</h2>
      </div>
      {/* <div className='flex justify-between items-center  py-0 sm:py-2 text-base'>
        <h2>Discount on MRP</h2>
        <h2>-₹{calculateOriginalPrice()}.00</h2>
      </div> */}
     
      {
        <div className='flex justify-center mt-5 items-center text-green-400 font-semibold py-2 text-base'>
          After booking we will contact you soon...
        </div>
      }
      <div className="flex w-full py-2 mt-5 flex-row sm:flex-col justify-between items-center fixed left-0 bottom-0 sm:relative bg-white  sm:mx-0">
        <div className="total flex flex-col sm:flex-row w-1/2 sm:w-full sm:justify-between item-start sm:items-center px-2 sm:px-0">
          <h2 className='font-bold text-xs sm:text-xl text-left text-slate-500 sm:capitalize uppercase'>Total amount</h2>
          <h2 className='font-bold text-left sm:text-xl text-2xl'>₹{calculateOriginalPrice()}.00</h2>
        </div>
        <div className='flex justify-center w-1/2 sm:w-fullc items-center px-2 sm:px-0'>

        {
          !isCheckoutShow && <div className="btn flex justify-center items-center gap-1 px-3 py-4 w-full text-center cursor-pointer bg-slate-700 text-white font-semibold my-3 rounded-lg" onClick={handleCheckout}>
           <FiMessageCircle className='text-2xl sm:block hidden'/> Book you design 
          </div>
        }
        </div>
      </div>
      <Toaster />
    </div>
  )
}

export default CheckoutSidebar