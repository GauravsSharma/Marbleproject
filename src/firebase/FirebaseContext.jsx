// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { createContext, useContext, useEffect, useState } from "react";

import toast, { Toaster } from "react-hot-toast";

const Firebase = createContext(null);

export const useFirebase = () => {
  return useContext(Firebase);
};

export const ContextProvider = (props) => {
 
  const [lengthOfWishlist, setLengthOfWishlist] = useState(() => {
    const data = localStorage.getItem("wishlist");
    return data ? JSON.parse(data).length : 0;
  });
  const [lengthOfCart, setLengthOfCart] = useState(() => {
    const data = localStorage.getItem("cart");
    return data ? JSON.parse(data).length : 0;
  });
  const addToWishlist = (obj) => {
    const data = localStorage.getItem("wishlist");
    const prev = data ? JSON.parse(data) : [];
    const checkIfAlreadyExist = prev.some((item) => item.id === obj.id);

    console.log(checkIfAlreadyExist);
    if (checkIfAlreadyExist) {
      toast.error("Product already exist in wishlist");
      return false;
    }
    if (obj) {
      const updatedCart = [...prev, obj];
      setLengthOfWishlist(updatedCart.length);
      localStorage.setItem("wishlist", JSON.stringify(updatedCart));
      toast.success("Item added to you wishlist");
      return true;
    } else {
      setLengthOfWishlist(prev.length);
    }
  };
  const moveToWishlist = (id) => {
    // add item to playlist
    const data = localStorage.getItem("cart");
    const prev = data ? JSON.parse(data) : [];
    console.log(id);
    
    const updatedData = prev.filter((item) => item.id === id);
    console.log("ye add hoga ",updatedData);
    addToWishlist(updatedData[0]);
    // setLengthOfWishlist(lengthOfWishlist + 1);
    // remove item from cart
    let cartData = localStorage.getItem("cart");
    cartData = cartData ? JSON.parse(data) : [];
    const updatedCart = cartData.filter((item) => item.id !== id);
    console.log("ye hat gaya",updatedCart);
    
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setLengthOfCart(lengthOfCart - 1);
    // toast.success("Item added to you wishlist");
    return true;
  };
  const addToCart = (obj) => {
    const data = localStorage.getItem("cart");
    const prev = data ? JSON.parse(data) : [];

    if (obj) {
      const checkIfAlreadyExist = prev.some((item) => item.id === obj.id);
      console.log(checkIfAlreadyExist);
      if (checkIfAlreadyExist) {
        console.log("i entered");
        toast.error("Product already exist in your cart");
        return;
      }
      const updatedCart = [...prev, obj];
      console.log(updatedCart);

      setLengthOfCart(updatedCart.length);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      toast.success("Item added to you cart");
      return updatedCart;
    } else {
      setLengthOfCart(prev.length);
    }
  };

  return (
    <>
      <Firebase.Provider
        value={{
          addToWishlist,
          lengthOfWishlist,
          lengthOfCart,
          addToCart,
          moveToWishlist
        }}
      >
        {props.children}
        <Toaster />
      </Firebase.Provider>
    </>
  );
};
