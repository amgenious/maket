import React from 'react'
import { ClothesProduct } from './ClothesProduct'
import { ShoesProduct } from './ShoesProduct'
import { Link } from 'react-router-dom'
import { ElectronicsProduct } from './ElectronicsProduct'

export const HomeProducts = () => {
  return (
    <div className='w-[100%] flex flex-col justify-center items-center mt-3 mb-3 gap-8'>
        <ClothesProduct />
        <Link to={'/clothes'}>
         <p className='text-base font-bold hover:text-success text-center'><i>More</i></p>
        </Link>
        <ShoesProduct />
        <Link to={'/shoes'}>
         <p className='text-base font-bold hover:text-success text-center'><i>More</i></p>
        </Link>
        <ElectronicsProduct />
        <Link to={'/electronics'}>
         <p className='text-base font-bold hover:text-success text-center'><i>More</i></p>
        </Link>
    </div>
  )
}
