const express = require('express')
const path = require('path')
const cors = require('cors')
const mongoose = require('mongoose')
const PORT = process.env.PORT || 3000
const app = express()

const productRoutes = require('./routes/productRoutes.js')

mongoose.connect(
  'mongodb://localhost:27017/restful_db',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
)

const db = mongoose.connection
db.on('error', error => console.error(error))
db.once('open', () => console.log('database connected'))

// this middleware will be executed for every request to the app
app.use(function (req, res, next) {
  res.header("Content-Type",'application/json');
  next();
});
app.use(cors())
app.use(express.json())
app.use('/product', productRoutes)

app.listen(PORT, (err) => {
  console.log(`app running at port ${PORT}`)
  if(err) {
    console.log('an error occurred')
  }
})
