import React from 'react'
import Items from './Items'
import '../css/shop.css'

function Shop({update,items}) {

 
  return (
    <div className='shop'><h1>Shop</h1>
      <div className='container-out'>
        <Items items={items} update={update}></Items>          
    
      </div>
    </div>

    
  )
}

export default Shop