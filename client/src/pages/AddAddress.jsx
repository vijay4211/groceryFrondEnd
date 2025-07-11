import React, { useState } from "react";

import { assets } from "../assets/assets";

const AddAddress = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zip: "",
    country: "",
    phone: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log("formData", formData);
  };

  return (
    <div>
      <p className="bg-green-600 text-white">AddAddress Page</p>
      <div className="mt-12 flex flex-col md:flex-row gap-6 bg-gray-100 rounded-xl shadow-md">
        {/* Left Side: Address Fields */}
        <div className="flex-1 bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Address Details
          </h2>
          {/* form */}
          <form
            onSubmit={submitHandler}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            <div>
              {/* bydefault label is inline. jab0 */}
              <label className="block text-gray-600">First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
                required
              />
            </div>
            <div>
              {/* bydefault label is inline */}
              <label className="block text-gray-600">Last Name</label>
              <input
                type="text"
                name="LastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
                required
              />
            </div>
            <div>
              {/* bydefault label is inline */}
              <label className="block text-gray-600">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
                required
              />
            </div>
            <div>
              {/* bydefault label is inline */}
              <label className="block text-gray-600">Street</label>
              <input
                type="text"
                name="street"
                value={formData.street}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
                required
              />
            </div>
            <div>
              {/* bydefault label is inline */}
              <label className="block text-gray-600">City</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
                required
              />
            </div>
            <div>
              {/* bydefault label is inline */}
              <label className="block text-gray-600">State</label>
              <input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
                required
              />
            </div>
            <div>
              {/* bydefault label is inline */}
              <label className="block text-gray-600">Zip Code</label>
              <input
                type="text"
                name="zip"
                value={formData.zip}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
                required
              />
            </div>
            <div>
              {/* bydefault label is inline */}
              <label className="block text-gray-600">Country</label>
              <input
                type="text"
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
                required
              />
            </div>
            <div>
              {/* bydefault label is inline */}
              <label className="block text-gray-600">Phone</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
                required
              />
            </div>
            <div className="col-span-2">
              <button
                type="submit"
                className="w-full bg-indigo-500 hover:indigo-600 text-white rounded-xl p-3"
              >
                Save Address
              </button>
            </div>
          </form>
        </div>

        {/* Right Side: Image */}
        <div className="flex-1 flex items-center justify-center">
          <img
            src={assets.add_address_iamge}
            alt="Address Illustration"
            className="w-full max-w-xs rounded-lg shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default AddAddress;
