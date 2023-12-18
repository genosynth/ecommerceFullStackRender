import React,{useState} from 'react'
import CartIcon from '@mui/icons-material/ShoppingCart';
import '../css/navbar.css'
import { Button } from '@mui/material';


function Navbar({cart,clickCart}) {

  const logOut = () =>{
    localStorage.removeItem("ecommerce")
    window.location.href = "/e-commerce1"
  }

const [user] = useState(()=>{
  if (JSON.parse(localStorage.getItem("ecommerce"))){
    return <div style={{display:"flex", flexDirection:"column"}}>
      <span>{JSON.parse(localStorage.getItem("ecommerce")).fullName}</span>
      <Button style={{width:"50%"}}variant="outlined" onClick={logOut}>Log Out</Button>
    </div>
  } else return   <Button variant="outlined" href='/e-commerce1/login'>Log In</Button>
})

let quantity = 0
  cart.forEach(element => {
    quantity=quantity+element.quantity
  });
  return (
    <nav>
    <h1>The Zone</h1>
    <ul>
      
      <li><a href="/e-commerce1">Home</a></li>
      <li><a href="/e-commerce1/shop">Shop</a></li>
      <li><a href="#" onClick={clickCart}><CartIcon fontSize='large'/>{quantity}</a></li>
      <li style={{fontSize:"30px", alignContent:"centre"}}>{user}</li>
    
    </ul>
    
  </nav>
  )
}

export default Navbar