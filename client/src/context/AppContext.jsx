import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { dummyProducts } from "../assets/assets";
import toast, { Toaster } from "react-hot-toast";

export const AppContext = createContext(null);

const AppContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [isSeller, setIsSeller] = useState(null);
  const [showUserLogin, setShowUserLogin] = useState(false);
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState({}); //cartItems ke under object q liya hai useState({})
  // console.log("cartItems", cartItems);

  const [searchQuery, setSearchQuery] = useState({});
  // fetch all products data
  const fetchProducts = async () => {
    setProducts(dummyProducts);
  };

  // Add Product To Cart
  //mera question yaha hai ki "itemId" aahi kahase
  const addToCart = (itemId) => {
    //structuredClone() cartItems ki copy banata hai and waha copy cartData ke under store karwa denga.
    let cartData = structuredClone(cartItems);

    //item already available aate
    if (cartData[itemId]) {
      //ItemId jar avalable aasel tar quantity increass hoel
      cartData[itemId] += 1;
    } else {
      //itemId nasel tar new Item id create karayachi aahe tya mule mi 1 cha use kela aahe..
      cartData[itemId] = 1;
    }
    setCartItems(cartData);
    toast.success("added to cart");
  };

  // Update Cart Item Quantity
  const updateCartItem = (itemId, quantity) => {
    let cartData = structuredClone(cartItems);
    //cartData[2] = 3
    cartData[itemId] = quantity;

    setCartItems(cartData);
    toast.success("cart updated");
  };

  //Total Cart Items
  const cartCount = () => {
    let totalCount = 0;
    for (const item in cartItems) {
      totalCount += cartItems[item];
    }
    return totalCount;
  };

  // Total Cart Amount
  const totalCartAmount = () => {
    let totalAmount = 0;
    for (const items in cartItems) {
      let itemInfo = products.find((product) => product._id === items);
      //console.log("itemInfo", itemInfo);
      // cartItems[items] > 0 hai matalab hamare pass cart ki value available hai.

      //cartItems[5] > 0
      if (cartItems[items] > 0) {
        //totalAmout = totalAmout + cartItems[1] * itemInfo.250
        totalAmount += cartItems[items] * itemInfo.offerPrice;
      }
    }
    //return nahi kiya to hame undefine show honga isiliye hame yahper return ka use kiya hai.
    return Math.floor(totalAmount * 100) / 100;
  };

  //Remove Product From Cart
  const removeFromCart = (itemId) => {
    let cartData = structuredClone(cartItems);
    if (cartData[itemId]) {
      cartData[itemId] -= 1;
      if (cartData[itemId] === 0) {
        delete cartData[itemId];
      }
      toast.success("remove from cart");
      setCartItems(cartData);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const value = {
    navigate,
    user,
    setUser,
    isSeller,
    setIsSeller,
    showUserLogin,
    setShowUserLogin,
    products,
    addToCart,
    updateCartItem,
    cartCount,
    totalCartAmount,
    removeFromCart,
    cartItems,
    searchQuery,
    setSearchQuery,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
