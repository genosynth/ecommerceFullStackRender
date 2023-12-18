const express = require("express")
const port = process.env.PORT || 4000
const app = express();
const routesUrls = require('./routes/routes')
const mongoose = require('mongoose')
const cors = require('cors')
const dotenv = require('dotenv')
const path = require("path")

dotenv.config() 


mongoose.connect(process.env.DATABASE_ACCESS, (error, result) =>{
  if (error) {return console.log(error)}
  else console.log("Database connected ")
})

app.use(express.static(path.join(__dirname + '/public' )))
app.get('/e-commerce1*', function (req, res) {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
}); 



app.use(express.json())
app.use(cors())
app.use('/api', routesUrls)


app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
  })