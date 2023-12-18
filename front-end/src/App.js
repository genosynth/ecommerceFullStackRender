import './css/App.css';
import Navbar from './components/Navbar.js'
import Home from './components/Home.js'
import Shop from './components/Shop.js'
import Cart from './components/Cart.js'

import polyd from './photos/polyd.jpg'
import polybrute from './photos/polybrute.png'
import kurzweil from './photos/kurzweil2700.jpg'
import jupiter from './photos/jupiter.png'
import opsix from './photos/opsix.png'
import deepmind from './photos/deepmind.png'
import minilogue from './photos/minilogue.png'
import juno from './photos/juno.jpg'

import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Switch, Routes, Route } from 'react-router-dom';
import SignUp from './components/SignUp';
import LogIn from './components/LogIn';
import CheckOut from './components/CheckOut';

function App() {

  //localStorage.setItem("cart",[]);
  const [cart, updateCart] = useState(()=>{
    if (localStorage.getItem("cart")){return JSON.parse(localStorage.getItem("cart"))}
    return []
  }) 
  const [style, updateStyle] = useState("hidden")  

  const [items, updateItems] = useState([
    {name:"Behringer Poly D", value:600,quantity:1, img:polyd},
    {value:2100, name:"Arturia Polybrute", quantity:1, img:polybrute},
    {value:450, name:"Korg Opsix", quantity:1, img:opsix},
    {value:720, name:"Behringer Deepmind 12", quantity:1, img:deepmind},
    {value:5000, name:"Roland Jupiter-8", quantity:1, img:jupiter},
    {value:2400, name:"Kurzweil - K2700", quantity:1, img:kurzweil},
    {value:450, name:"Korg Minilogue XD", quantity:1, img:minilogue},
    {value:650, name:"Roland Juno-DS 61", quantity:1, img:juno}

  ])
 
  
  function clickCart(){

    if (style==="hidden"){return updateStyle("visible")}
    if (style==="visible"){ return updateStyle("hidden")}
  }

  function update(object){
    
    let boolean = false //to check for double items to increase quantity
    cart.forEach((el)=>{    

    

      if (el.name==object.name){
       boolean = true
      }
    })


    if (!boolean){
      let obj = object
       updateCart([...cart,object])
       console.log(cart)
       
      }
    if (boolean){
      let newCart = cart.map((el)=>{
        if (el.name==object.name){
          el.quantity++         
                   
        }

        return el
    })

      updateCart([...newCart])
    
  }
    
  }

  function increaseQuantity(object){

    let newCart = cart.map((el)=>{
      if (el.name==object.name){
        el.quantity++
      }

      return el
    })
    
    updateCart([...newCart])
  }

  function decreaseQuantity(object){
    
    let newCart = cart.map((el)=>{
      if (el.name==object.name && el.quantity!==0){
        el.quantity--;
        
      }

     return el    
    })
   
    const result = newCart.filter(item => item.quantity > 0);
  
    updateCart([...result])   
  }

  function manualQuantity(item,quantity){
    let updatedCart = cart.map((el)=>{
      if (el.name==item.name){
        el.quantity = quantity
      }
      return el
    })

    updateCart([...updatedCart])
  }


  useEffect(()=> {
   localStorage.setItem("cart", JSON.stringify(cart))
   updateItems([
    {name:"Behringer Poly D", value:600,quantity:1, img:polyd},
    {value:2100, name:"Arturia Polybrute", quantity:1, img:polybrute},
    {value:450, name:"Korg Opsix", quantity:1, img:opsix},
    {value:720, name:"Behringer Deepmind 12", quantity:1, img:deepmind},
    {value:5000, name:"Roland Jupiter-8", quantity:1, img:jupiter},
    {value:2400, name:"Kurzweil - K2700", quantity:1, img:kurzweil},
    {value:450, name:"Korg Minilogue XD", quantity:1, img:minilogue},
    {value:650, name:"Roland Juno-DS 61", quantity:1, img:juno}

  ])
  }, [cart])

 
  if (style=="hidden"){ // this is done so that cart will not be rendered when visibility of style variable == hidden
    return(
    <div className="App">
    
     <Navbar cart={cart} clickCart={clickCart}/>
     <Router basename='e-commerce1/'>
        <Routes>
          <Route path="/"  element={<Home></Home>}/>
          <Route path="/shop" element={<Shop update={update} items={items}></Shop>}/>
          <Route path="/register" element={<SignUp></SignUp>}/>
          <Route path="/login" element={<LogIn></LogIn>}/>
          <Route path="/checkOut" element={<CheckOut cart={cart}></CheckOut>}/>
        </Routes>
     </Router>
    
      

    </div>
    )
  }

  return (
    <div className="App">
    <Cart cart={cart} clickCart={clickCart} increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity} manualQuantity={manualQuantity} style={style}></Cart> 
     <Navbar cart={cart} clickCart={clickCart}/>
     <Router basename='e-commerce1/' >
        <Routes>
          <Route path="/"  element={<Home></Home>}/>
          <Route path="/shop" element={<Shop update={update} items={items}></Shop>}/>
          <Route path="/register" element={<SignUp></SignUp>}/>
          <Route path="/login" element={<LogIn></LogIn>}/>
          <Route path="/checkOut" element={<CheckOut cart={cart}></CheckOut>}/>
        </Routes>
     </Router>
    
      

    </div>
  );
}

export default App;
