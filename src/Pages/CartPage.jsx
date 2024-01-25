import React, { useState } from "react";
import { Link } from "react-router-dom";

export const CartPage = () => {
  const [firstnumber, setFirstnumber] = useState(0);
  return (
    <div className="bg-slate-800 p-3 h-fit w-[100%]">
      <div
        className=" bg-base-100 border-base-300 rounded-box p-6"
      >
        <div className="flex justify-between">
          <h1 className="text-3xl text-white font-bold">Cart</h1>
          <Link to={"/checkout"}>
            <div className="btn btn-primary cursor-pointer">Check out </div>
          </Link>
        </div>
        {/* This is where the content will be displayed */}
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th>Product </th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-slate-600 text-white">
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask w-16 h-16">
                        <img
                          src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">Shoe</div>
                    </div>
                  </div>
                </td>
                <td>Ghc 100</td>
                <td>
                  <div className="flex">
                    <div
                      className="px-1 mr-2 bg-white rounded-lg text-black cursor-pointer"
                      onClick={() => setFirstnumber(firstnumber + 1)}
                    >
                      +
                    </div>
                    <div className="text-white">{firstnumber}</div>
                    <div
                      className="px-1 ml-2 bg-white rounded-lg text-black cursor-pointer"
                      onClick={() => setFirstnumber(firstnumber - 1)}
                    >
                      -
                    </div>
                  </div>{" "}
                </td>
                <th>
                  <button className="btn btn-ghost btn-xs">Ghc 100</button>
                </th>
                <th className="cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="20"
                    height="20"
                    viewBox="0 0 128 128"
                    fill="red"
                  >
                    <path d="M 49 1 C 47.34 1 46 2.34 46 4 C 46 5.66 47.34 7 49 7 L 79 7 C 80.66 7 82 5.66 82 4 C 82 2.34 80.66 1 79 1 L 49 1 z M 24 15 C 16.83 15 11 20.83 11 28 C 11 35.17 16.83 41 24 41 L 101 41 L 101 104 C 101 113.37 93.37 121 84 121 L 44 121 C 34.63 121 27 113.37 27 104 L 27 52 C 27 50.34 25.66 49 24 49 C 22.34 49 21 50.34 21 52 L 21 104 C 21 116.68 31.32 127 44 127 L 84 127 C 96.68 127 107 116.68 107 104 L 107 40.640625 C 112.72 39.280625 117 34.14 117 28 C 117 20.83 111.17 15 104 15 L 24 15 z M 24 21 L 104 21 C 107.86 21 111 24.14 111 28 C 111 31.86 107.86 35 104 35 L 24 35 C 20.14 35 17 31.86 17 28 C 17 24.14 20.14 21 24 21 z M 50 55 C 48.34 55 47 56.34 47 58 L 47 104 C 47 105.66 48.34 107 50 107 C 51.66 107 53 105.66 53 104 L 53 58 C 53 56.34 51.66 55 50 55 z M 78 55 C 76.34 55 75 56.34 75 58 L 75 104 C 75 105.66 76.34 107 78 107 C 79.66 107 81 105.66 81 104 L 81 58 C 81 56.34 79.66 55 78 55 z"></path>
                  </svg>
                </th>
              </tr>
            </tbody>
          </table>
        </div> 
           <div className="mt-3 flex justify-between flex-wrap w-[100%] gap-1 p-2">
            <Link to={'/'}>
            <div className="bg-primary h-fit py-2 px-2 cursor-pointer hover:bg-blue-800 text-white rounded-lg">
              Continue Shopping
            </div>
            </Link>
            <div className="bg-slate-400 p-2">
                <div className=" p-2 flex text-white justify-between">
                  <p className="font-bold">Total</p>
                  <p>Ghc 100</p>
                </div>
            </div>
          </div>
      </div>
    </div>
  );
};
