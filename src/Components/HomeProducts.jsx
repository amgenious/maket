import React from 'react'
import { products } from '../data/data'


export const HomeProducts = () => {
  return (
    <div className='w-[100%] flex flex-col justify-center items-center mt-3 mb-3 gap-8'>
         <div className='w-[100%] flex flex-wrap justify-center items-center gap-5'>
            {
                products.map((product)=>(
                    <div className="card w-60 h-80 glass" key={product.id}>
                    <figure>
                      <img
                        src={product.image}
                        alt="car!"
                        />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title">{product.name}</h2>
                      <p>{product.price}</p>
                      <div className="card-actions justify-between items-center">
                        <button className="p-2 rounded-md bg-success text-white">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                              />
                          </svg>
                        </button>
                        <div className="dropdown dropdown-end">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-circle btn-ghost btn-xs text-info"
                  >
                    <svg
                      tabIndex={0}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="w-4 h-4 stroke-current"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                  </div>
                  <div
                    tabIndex={0}
                    className="card compact dropdown-content z-[1] shadow bg-base-100 rounded-box w-64"
                  >
                    <div tabIndex={0} className="card-body">
                      <h2 className="card-title">{product.name}</h2>
                      <p>{product.vendor}</p>
                    </div>
                  </div>
                </div>
                      </div>
                    </div>
                  </div>
          
                ))
            }
    </div>
    </div>
  )
}
