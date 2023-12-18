import React from 'react'
import image from '../photos/home.jpg'
import Button from '@mui/material/Button';
import '../css/home.css'

function Home() {


  return (
    <div className='bimage'>
        <div className='home-body'><h1>Best Online Shop Of 2021</h1>
        <h4>-#1 Ranked by Technology Magazine</h4>
        <form action="/e-commerce1/shop">
        <button className='home-button' type='submit'>Shop Now</button>
        </form>
        
        </div>
    </div>
  )
}

export default Home