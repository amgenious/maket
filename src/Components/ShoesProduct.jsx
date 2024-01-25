import React from 'react'
import { shoes } from '../data/data'

export const ShoesProduct = () => {
  return (
    <>
    <h1 className='text-center text-white font-bold text-3xl mb-4'>Shoes</h1>
    <div className='w-[100%] flex flex-wrap justify-center items-center gap-2'>
            {
                shoes.map((shoe)=>(
                    <div className="card w-72 h-96 glass mb-5 sm:mr-5" key={shoe.id}>
                    <figure>
                      <img
                        src={shoe.image}
                        alt="car!"
                        />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title">{shoe.name}</h2>
                      <p>{shoe.price}</p>
                      <div className="card-actions justify-end">
                        <button className="btn btn-success text-white">
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
                      </div>
                    </div>
                  </div>
          
                ))
            }
    </div>
    </>
  )
}
