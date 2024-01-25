import React from 'react'
import GeneralPage from '../Pages/GeneralPage'
import { GroceriesPage } from '../Pages/GroceriesPage'
import { ClothesPage } from '../Pages/ClothesPage'

export const BodyComp = () => {
  return (
    <>
    <div role="tablist" className="tabs tabs-lifted bg-slate-800 p-3 h-fit">

  <input type="radio" name="my_tabs_2" role="tab" className="tab text-white" aria-label="Groceries" checked/>
  <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6"><GroceriesPage /></div>

  <input type="radio" name="my_tabs_2" role="tab" className="tab text-white" aria-label="Clothes" checked/>
  <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6"><ClothesPage /></div>
  
  <input type="radio" name="my_tabs_2" role="tab" className="tab text-white " aria-label="General" checked/>
  <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6"><GeneralPage /></div>

</div>
    </>
  )
}
