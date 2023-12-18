const express = require('express')
const router = express.Router()
const userReg = require("../models/dbService")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs");



router.post('/sign', async(request, response) => {
    console.log(request.body)
    let hashedPassword = await bcrypt.hash(request.body.password, 8);
    const user = new userReg({
        fullName: request.body.fullName,       
        password: hashedPassword,
        email: request.body.email      
    })

    user.save()
    .then (data => {
        console.log(data)
        response.json(data)
        //console.log(data)
    })
    .catch (error => {
        response.json(error)
        //console.log(error)
    })
})

router.post('/login', async(request, response) => {
    //response.send('send')
   const user = await userReg.findOne({
       email: request.body.email, 
       //password: request.body.password {THIS IS COMMENTED AS PASSWORD IS BEING CHECKED BY HASHING AFTER THIS LINE}
    })

    if(user && await bcrypt.compare(request.body.password, user.password)){

        const token = jwt.sign({
            fullName:user.fullName,
            email:user.email
        }, 'secretqwerty')
        console.log(user)
        return response.json({status: 'ok', user:token})
    } else {return response.json({status:"error", user:false})}

})

router.get("/home",(req,res)=>{
    return res.json({message:"hello"})
})


module.exports = router