import React from 'react'
import { shops } from '../data/data'

export const ShopsPage = () => {
  return (
    <div>
        <div className='w-[100%] flex flex-wrap items-center p-3 gap-2'>
            {
                shops.map((shop)=>(
                    <div className="card w-60 h-80 glass" key={shop.id}>
                    <figure>
                      <img
                        src={shop.logo}
                        alt="car!"
                        />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title">{shop.name}</h2>
                      <p>{shop.price}</p>
                      <div className="card-actions justify-between ">
                        <button className='btn btn-success text-white'>Products</button>
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
                      <h2 className="card-title">{shop.name}</h2>
                      <p>{shop.description}</p>
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
