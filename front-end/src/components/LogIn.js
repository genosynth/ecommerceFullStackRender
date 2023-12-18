import React, {useState} from 'react'
import "../css/reglogin.css"
import Button from 'react-bootstrap/Button';
import axios from 'axios'
import jwt from 'jwt-decode'

function LogIn() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const updateEmail = (event) => {
    setEmail(event.target.value);
  }

  const updatePassword = (event) => {
    setPassword(event.target.value);
  }

  
  const logging = (event) =>{
    event.preventDefault()

    console.log(process.env)
    let user = {email,password}
    axios.post(process.env.REACT_APP_SERVER_LOG_URL,  user ) //post request is made to an url which is found in the .env file
    .then(res => {
     
      if (!res.data.user){
        return window.alert("Incorrect email or password")
      }

      let decoded = jwt(res.data.user)

      window.alert(`Hi ${decoded.fullName}, you are logged in.`)
      localStorage.setItem("ecommerce", JSON.stringify(decoded))
      console.log(res);
      console.log(res.data);
      window.location.href = "/e-commerce1/checkOut"
      
    })
}



  return (

    <div className="login">
        <h1>Log In</h1>
        <form className='login-form' onSubmit={logging}>
            
            <label>Email:</label>
            <input type="email" onChange={updateEmail}></input>
        
            <label>Password:</label>
            <input type="password" onChange={updatePassword}></input>
            <span>Not yet registered?, sign up from <a href='/e-commerce1/register'>here.</a></span>
            <Button variant="primary" type='submit'>Log In</Button>

        </form>

    </div>
  )
}

export default LogIn