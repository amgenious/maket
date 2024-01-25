import React from 'react'
import { MenuandSearch } from '../Components/MenuandSearch'
import { Hero } from '../Components/Hero'
import { HomeProducts } from '../Components/HomeProducts'

export const HomePage = () => {
  return (
    <div>
        <MenuandSearch />
        <Hero />
        <HomeProducts />
    </div>
  )
}
