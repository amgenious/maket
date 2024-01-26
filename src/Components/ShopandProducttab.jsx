import React from 'react'
import { Shopsitems } from './Shopsitems'
import { HomeProducts } from './HomeProducts'

export const ShopandProducttab = () => {
  return (
    <div className='w-[100%] mt-5 p-5'>
        <div role="tablist" className="tabs tabs-lifted ">
  <input type="radio" name="my_tabs_2" role="tab" className="tab text-white font-bold" aria-label="Shops" checked/>
  <div role="tabpanel" className="tab-content bg-base-200 border-base-300 rounded-box p-6"><Shopsitems/></div>

  <input type="radio" name="my_tabs_2" role="tab" className="tab text-white font-bold" aria-label="Products" />
  <div role="tabpanel" className="tab-content bg-base-200 border-base-300 rounded-box p-6"><HomeProducts /></div>

</div>
    </div>
  )
}
