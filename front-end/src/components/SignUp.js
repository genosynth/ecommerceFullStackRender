import React, {useState} from 'react'
import "../css/reglogin.css"
import Button from 'react-bootstrap/Button';
import axios from 'axios'

function SignUp() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");


    const updateName = event => {
        setName(event.target.value);
     };

     const updateSurname = event => {
        setSurname(event.target.value);
     };

     const updateEmail = event => {
        setEmail(event.target.value)
     }

     const updatePassword = event => {
        setPassword(event.target.value);
     };
    

     const updateConfirmPassword = event => {
        setConfirmPassword(event.target.value);
     };


     const registration = (event) =>{
        event.preventDefault()

        if (confirmPassword != password){ return window.alert("Passwords do not match!")}
        console.log(process.env)
        let user = {fullName:name + " "+ surname, password , email}
        axios.post(process.env.REACT_APP_SERVER_SIGN_URL,  user ) //post request is made to an url which is found in the .env file
        .then(res => {
          if (!res.data.email){
            return window.alert("Username already in use!")
          }

          window.alert("User registered")
          console.log(res);
          console.log(res.data);
          window.location.href="/e-commerce1/login"
          
        })
    }
  return (

    <div className="register">
        <h1>Registration</h1>
        <form onSubmit={registration} className='reg-form'>
            <label>Name:</label>
            <input type="text" required onChange={updateName}></input>
            
            <label>Surname:</label>
            <input type="text" required onChange={updateSurname}></input>
            
            <label>Email:</label>
            <input type="email" required onChange={updateEmail}></input>
        
            <label>Password:</label>
            <input type="password" required onChange={updatePassword}></input>
            
            <label>Confirm Password:</label>
            <input type="password" required onChange={updateConfirmPassword}></input>

            <Button variant="primary" type='submit'>Sign Up</Button>

        </form>

    </div>
  )
}

export default SignUp