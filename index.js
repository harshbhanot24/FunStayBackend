// const express=require('express')
// const app=express()
// const cors=require('cors')
// // 
// 
// app.use(cors)
// // 
// app.get('/',(req,res)=>{
//     res.json({"message":"Currently I am not serving you this sorry try something other I have to offer"})
// })
// app.listen((process.env.PORT || 3000),()=>{
//     console.log('working')
// })
const express=require('express')
const app=express();
require('./common/connection')
const card=require('./routes/card')
//app.use(express.static(__dirname+'/dist/start'))
app.use(function (req, res, next) {
  //  res.setHeader('Access-Control-Allow-Origin', ' http://fast-waters-72330.herokuapp.com'); 
res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
res.setHeader('Access-Control-Allow-Methods', 'POST');
res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,x-auth-token,content-type');
res.setHeader('Access-Control-Allow-Credentials', true);
next();
});

app.use('/card',card)
app.get('/',(req,res)=>{
    res.json({"message":"Currently I am not serving you this sorry try something other I have to offer"})
})
app.listen((process.env.PORT || 3000),()=>{
  console.log('connected')  
})
