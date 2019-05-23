const express=require('express')
const app=express();
require('./common/connection')
const card=require('./routes/card')
const cors=require('cors')

app.use(cors())

app.use('/card',card)
app.get('/',(req,res)=>{
    res.json({"message":"Currently I am not serving you this sorry try something other I have to offer"})
})
app.listen((process.env.PORT || 3000),()=>{
  console.log('connected')  
})
