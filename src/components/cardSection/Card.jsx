import toast, { Toaster } from 'react-hot-toast';
import React, { useEffect, useState } from 'react';
import { IoMdHeart } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import { RiStarSFill } from "react-icons/ri";
import { useFirebase } from '../../firebase/FirebaseContext';
const ProductCard = ({ thumbnail, title, price, price2 = 999, id, width = "1/5", isWish = false, setWish }) => {
  const [color, setColor] = useState("slate");
  const { addToWishlist, addToCart } = useFirebase();
  const navigate = useNavigate();

  const addItemToCart = () => {
     const currCart = {
        thumbnail,
        title,
        price,
        id,
     };
     addToWishlist(currCart);
  };

  const toggleColor = () => {
     if (color !== "red") {
        addItemToCart();
     }
     setColor("red");
  };

  const handleRemove = () => {
     const data = localStorage.getItem('wishlist');
     if (!data) return;

     const parsedData = JSON.parse(data);
     const updatedData = parsedData.filter((item) => item.id !== id);
     setWish(updatedData);
     localStorage.setItem('wishlist', JSON.stringify(updatedData));
     addToWishlist();
  };

  const discountPercentage = ((price2 - price) / price2) * 100;

  const truncateText = (text, maxLength) => {
     const words = text.split(' ');
     const truncated = words.slice(0, maxLength).join(' ');

     return words.length > maxLength ? `${truncated}...` : truncated;
  };

  return (
     <>
        <div className={`w-1/2 h-auto sm:w-${width} p-0 sm:p-2 mt-2 hover:border-1 hover:border-slate-500 hover:shadow-2xl shadow-lg`}>
           <div className="w-full h-[250px] relative object-contain hover:scale-105 duration-500">
              <img
                 className="w-full h-full object-cover"
                 style={{ maxHeight: "100%", maxWidth: "100%", aspectRatio: "1/1" }}
                 src={thumbnail}
                 alt=""
              />
              {!isWish && (
                 <div className="top-4 right-4 absolute rounded-full h-[30px] w-[30px] flex justify-center items-center bg-white">
                    <IoMdHeart className={`text-xl cursor-pointer text-${color}-600`} onClick={toggleColor} />
                 </div>
              )}
           </div>
           <div className="text-black p-1 tracking-tighter sm:font-bold mt-2 sm:text-sm">{truncateText(title, 3)}</div>
           <div className="flex justify-between p-1 items-center">
              <p className="font-bold my-1">₹{price}</p>
              <div className="flex justify-center items-center"></div>
           </div>
           {isWish ? (
              <div className="w-full flex justify-between gap-1 items-center sm:flex-row flex-col">
                 <button
                    className="sm:w-[48%] w-full text-xs p-1 border text-red-600 font-semibold  duration-500 border-red-600 hover:text-red-600"
                    onClick={handleRemove}
                 >
                    Remove
                 </button>
                 <button
                    className="sm:w-[48%] w-full text-xs p-1 border hover:bg-slate-800 font-semibold duration-500 border-slate-800 hover:text-white"
                    onClick={() => navigate(`/item-details/${id}`)}
                 >
                    View Details
                 </button>
              </div>
           ) : (
              <button
                 className="w-full p-1 border hover:bg-slate-800  duration-500 border-slate-800 hover:text-white"
                 onClick={() => navigate(`/item-details/${id}`)}
              >
                 View Details
              </button>
           )}
           <Toaster />
        </div>
     </>
  );
};

export default ProductCard;
