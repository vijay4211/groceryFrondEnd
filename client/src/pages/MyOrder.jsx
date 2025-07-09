import React, { useEffect, useState } from "react";

import { dummyOrders } from "../assets/assets";

const MyOrder = () => {
  const [myOrders, setMyOrders] = useState([]);

  const fetchOrders = async () => {
    setMyOrders(dummyOrders);
  };

  //1st time call when page will loaded
  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div>
      <h1>MyOrder Page</h1>
      <div className="mt-12 mb-16">
        <div>
          <p className="text-2xl font-medium md:text-3xl">My Orders</p>
        </div>
        {myOrders.map((order, index) => (
          <div
            key={index}
            className="my-8 border border-gray-300 rounded-lg mb-10 p-4 py-5 max-w-4xl"
          >
            <p className="flex justify-between items-center gap-6">
              <span>Order ID: {order._id}</span>
              <span>Payment: {order.paymentType}</span>
              <span>TotalAmount: {order.amount}</span>
            </p>
            {order.items.map((item, index) => (
              <div
                key={index}
                className={`relative bg-white text-gray-800 ${
                  order.items.length !== index + 1 && "border-b"
                } border-gray-300 flex flex-col md:flex-row md:items-center justify-between p-4 py-5 w-cfull max-w-4xl`}
              >
                <div className="flex items-center mb-4 md:mb-0">
                  <div className="p-4 rounded-lg">
                    {/* 1st index image */}
                    <img
                      src={item.product.image[0]}
                      alt=""
                      className="w-16 h-16"
                    />
                  </div>

                  <div className="ml-4">
                    <h2 className="text-xl font-medium">{item.product.name}</h2>
                    <p>{item.product.category}</p>
                  </div>
                </div>

                <div className="text-xl font-medium">
                  <p>Quantity: {item.quantity || "1"}</p>
                  <p>Status: {order.status}</p>
                  <p>Date: {new Date(order.createdAt).toLocaleString()}</p>
                </div>
                <p className="text-lg">
                  Amount: ${item.product.offerPrice * item.quantity}
                </p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyOrder;

//MyOrder Page
