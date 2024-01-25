import React from 'react'
import { clothes } from '../data/data'
import { AddtoCart } from './AddtoCart'


export const ClothesProduct = () => {
  return (
    <>
    <h1 className='text-center text-white font-bold text-3xl mb-4'>Clothes</h1>
    <div className='w-[100%] flex flex-wrap justify-center items-center gap-2'>
            {
                clothes.map((clothe)=>(
                    <div className="card w-72 h-96 glass mb-5 sm:mr-5" key={clothe.id}>
                    <figure>
                      <img
                        src={clothe.image}
                        alt="car!"
                        />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title">{clothe.name}</h2>
                      <p>{clothe.price}</p>
                      <div className="card-actions justify-end">
                       <AddtoCart />
                      </div>
                    </div>
                  </div>
          
                ))
            }
    </div>

    </>
  )
}
