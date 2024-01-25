import React from 'react'
import { MenuandSearch } from '../Components/MenuandSearch'
import { ElectronicsProduct } from '../Components/ElectronicsProduct'

export const ElectronicsPage = () => {
  return (
    <div className='w-[100%]'>
      <MenuandSearch />
      <ElectronicsProduct />
    </div>
  )
}
