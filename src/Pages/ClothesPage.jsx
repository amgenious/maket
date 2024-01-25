import React from 'react'
import { ClothesProduct } from '../Components/ClothesProduct'
import { MenuandSearch } from '../Components/MenuandSearch'

export const ClothesPage = () => {
  return (
    <div className='w-[100%]'>
      <MenuandSearch />
      <ClothesProduct />
    </div>
  )
}
