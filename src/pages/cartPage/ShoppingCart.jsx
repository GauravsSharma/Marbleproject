import React, { useState, useEffect } from "react";
import Image from "../../../public/emptyCart.jpg";
import toast, { Toaster } from "react-hot-toast";
import { useFirebase } from "../../firebase/FirebaseContext";
// key={item.$id}
//                 title={item.title}
//                 price={item.price}
//                 thumbnail={item.thumbnail}
//                 id={item?.$id}
//                 setCart={setCarts}
//                 quan={item?.qty}
//                 idx={idx}
//                 handleQuantityChange={handleQuantityChange}
const ShoppingCart = ({
  title,
  price,
  thumbnail,
  id,
  description,
  setCart,
  isCheckoutShow = false,
  idx,
  setISCheckoutShow,
  isOrder = false,
  date,
  paymentId,
}) => {
  // const [quantity,setQuantity] = useState(quan);
  const { moveToWishlist, addToCart } = useFirebase();
  // const  discountPercentage = ((OPrice - DPrice) / OPrice) * 100;
  const handleMoveToWishList = () => {
    console.log(id);
    moveToWishlist(id);
  };
  const handleRemoveFromCart = () => {
    // console.log("id is",id);
    const items = localStorage.getItem("cart");
    const parsedItems = JSON.parse(items);

    // Filter out the item with the specified id
    const updatedItems = parsedItems.filter((item) => item.id !== id);

    console.log("parsed..", parsedItems);

    // Update local storage with the new array of items
    localStorage.setItem("cart", JSON.stringify(updatedItems));
    setCart(updatedItems);
    toast.success("Item removed");
    addToCart();
    // Update state if you are using state to manage the cart in your component
  };
  function removeWordsFromEnd(str, num) {
    let words = str.split(" "); // Split the string into an array of words
    if (num >= words.length) return str; // If num is greater than or equal to total words, return original string
    return words.slice(0, num).join(" "); // Keep only the first 'num' words// Join the remaining words back into a string
  }

  return (
    <div className="w-full flex justify-start items-start sm:items-center h-auto sm:h-40 p-1 border rounded-sm my-3">
      <img
        className="h-full w-[20%] border rounded-sm object-cover"
        src={thumbnail}
        alt=""
      />
      <div className="h-full w-[80%] sm:p-2">
        <div className="upper w-full flex p-1 sm:p-3 justify-between items-start flex-col sm:flex-row h-[80%] ">
          <div className="left sm:w-[80%] flex flex-col items-start pl-1">
            <h2 className="text-sm">{title}</h2>
            <p className="w-[90%]">{removeWordsFromEnd(description, 18)}...</p>
          </div>
          <div className="right w-full flex flex-row justify-start items-center gap-3 sm:gap-0 sm:flex-col sm:w-[20%]">
            <h1 className="font-semibold text-sm sm:text-lg my-1 sm:my-0">
              ₹{price}
            </h1>
            {/* <h3 className='inilne-block text-sm sm:text-md font-semibold text-green-600'>({Math.floor(discountPercentage)}% off)</h3> */}
          </div>
        </div>
        {!isOrder && (
          <div className="lower h-[20%] w-full ">
            <div className="flex h-full w-full justify-start items-center p-1 sm:p-3 sm:py-4">
              {!isCheckoutShow && (
                <div
                  className="remove text-slate-400 text-sm pr-7 font-semibold cursor-pointer border-r-2"
                  onClick={() => handleRemoveFromCart()}
                >
                  REMOVE
                </div>
              )}
              {!isCheckoutShow && (
                <div
                  className="move text-red-500 text-sm pl-7  font-semibold cursor-pointer"
                  onClick={handleMoveToWishList}
                >
                  MOVE TO WISHLIST
                </div>
              )}
            </div>
          </div>
        )}
      </div>
      <Toaster />
    </div>
  );
};

export default ShoppingCart;
