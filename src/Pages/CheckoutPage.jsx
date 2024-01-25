import React, { useState } from "react";

export const CheckoutPage = () => {
  

  return (
    <div className="p-5">
      <div className="bg-success text-white p-2">
        <div className="flex gap-5 w-[100%]">
          <div className="w-[40%] overflow-y-auto flex flex-col">
            <div className="flex justify-center mb-2">
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
              <figure>
                <img
                  src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                  alt="Shoes"
                  />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Shoes</h2>
               
                <div className="card-actions justify-end">
                  <button className="p-2 bg-white text-black rounded-lg">Ghc 100</button>
                </div>
              </div>
            </div>
            </div>
          </div>
          <div className="forms text-black rounded-xl bg-[#ffffffa1] w-[60%] p-5">
            <h1 className="font-bold text-2xl">Checkout</h1>
              <form className="pt-2 flex flex-col">
                <div className="flex flex-col mb-2">
                  <lable>Full Name</lable>
                <input placeholder="Full Name" type="text" className="input input-bordered input-success w-full max-w-xs bg-[#ffffffa1]" required></input>
                </div>
                <div className="flex flex-col mb-2">
                  <lable>Full Name</lable>
                <input placeholder="Full Name" type="text" className="input input-bordered input-success w-full max-w-xs bg-[#ffffffa1]" required></input>
                </div>
                <div className="flex flex-col mb-2">
                  <lable>Full Name</lable>
                <input placeholder="Full Name" type="text" className="input input-bordered input-success w-full max-w-xs bg-[#ffffffa1]" required></input>
                </div>
                <div className="flex flex-col mb-2">
                  <lable>Full Name</lable>
                <input placeholder="Full Name" type="text" className="input input-bordered input-success w-full max-w-xs bg-[#ffffffa1]" required></input>
                </div>
                
              </form>
          </div>
        </div>
      </div>
    </div>
  );
};
