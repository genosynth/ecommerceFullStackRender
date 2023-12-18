import React, {useState,useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import "../css/checkOut.css"
import CheckOutItems from "./CheckOutItems"


function CheckOut({cart}) {

    const [total, updateTotal] = useState("")
    const [user] = useState((JSON.parse(localStorage.getItem("ecommerce"))) || false)
    const [items] = useState(()=>{
        cart.map(()=>{

        })
    })

   
useEffect(()=>{
  if(!user){
    return window.location.href = "/e-commerce1/login"
}

if (cart.length==0){
    return window.location.href = "/e-commerce1/shop"

}

  let subTotal = 0
  cart.forEach((el)=>{
   
    subTotal=subTotal+(el.value*el.quantity)
  })
 updateTotal(subTotal)


},[])

  

    
  return (
    
    <div className='container'>
        <h1>CheckOut</h1>
        <span>{user.fullName}, click <a href="/e-commerce1/shop">here</a> to continue shopping, or the below button to confirm your order.</span>
        <div>
           <CheckOutItems cart={cart}></CheckOutItems>
            Total = {total}Euros
            
        </div>
        <Button variant="primary" onClick={()=>{
            window.alert("Order Confirmed! This is obviously a test application :)")
            window.location.href="/e-commerce1"
            localStorage.removeItem("cart")
            }}>Confirm Order</Button>
        

    </div>
  )
}

export default CheckOut