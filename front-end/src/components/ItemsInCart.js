import React , {useEffect, useState}from "react";
import '../css/itemsInCart.css'

function ItemsInCart({ cart, increaseQuantity, decreaseQuantity, manualQuantity }) {
 
  
  return cart.map((item) => {
    return (

        <tr key={item.name}>
            <td>{item.name}<img src={item.img} style={{width:"100px"}}></img></td>
            <td>{item.value * item.quantity}€</td>
            <td>
              <span>
            <span
          className="quantity"
          onClick={() => {
            decreaseQuantity(item);
          }}
        >
          -
        </span>
        <input type="number" min="1" value={item.quantity} onChange={(event)=>{manualQuantity(item,Math.abs(event.target.value))}} maxLength="2" size="2"/>
        <span
          className="quantity"
          onClick={() => {
            increaseQuantity(item);
          }}
        >
          +
        </span>
        </span>
            </td>

            
        </tr>
      
    );
  });
}

export default ItemsInCart;
