import React from 'react'

function CheckOutItems({cart}) {
    console.log(cart)

    return cart.map((item)=>{
        return (<div >
            <span>{item.name} - <img src={item.img} style={{width:"100px"}}></img> x {item.quantity}</span>
        </div>)
    })


}

export default CheckOutItems