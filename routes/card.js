const express=require('express')
const route=express();
var cardSchema = require('../common/schemas/cardSchema');
route.use(express.json());

route.post('/',(req,res)=>{
    const cardData=req.body;
   var result= AddCard(cardData);
   result.then((response)=>{
       if(!response.error){
        res.status(200).json({status:200,Data:response});
         res.end();
       }
    
   }).catch((err)=>{
       console.log(err)
    res.status(500).json({status:500,err:err});// in case of an unknown error 
   })
   
})
route.put('/:id',(req,res)=>{
    const cardData=req.body;
   var result=  cardSchema.findByIdAndUpdate(req.params.id,{$set:cardData})
   result.then((response)=>{
       if(!response.error){
        res.status(200).json({status:200,Data:response});
         res.end();
       }
    
   }).catch((err)=>{
       console.log(err)
    res.status(500).json({status:500,err:err});// in case of an unknown error 
   })
   
})

route.delete('/:id',(req,res)=>{
   const result= cardSchema.findByIdAndRemove({_id: req.params.id})
   result.then((response)=>{
    if(!response.error){
     res.status(200).json({status:200,Data:response});
      res.end();
    }
 
}).catch((err)=>{
    console.log(err)
 res.status(500).json({status:500,err:err});// in case of an unknown error 
})
})
route.get('/',(req,res)=>{
   const result= cardSchema.find();
   result.then((response)=>{
       if(!response.error){
        res.status(200).json({status:200,Data:response});
         res.end();
       }
    
   }).catch((err)=>{
       console.log(err)
    res.status(500).json({status:500,err:err});// in case of an unknown error 
   })
   
})
route.get('/:id',(req,res)=>{
    const result= cardSchema.find({_id: req.params.id});
    result.then((response)=>{
        if(!response.error){
         res.status(200).json({status:200,Data:response});
          res.end();
        }
     
    }).catch((err)=>{
        console.log(err)
     res.status(500).json({status:500,err:err});// in case of an unknown error 
    })
    
 })
async function AddCard(cardData){
    const cardObj=new cardSchema({
        heading:cardData.heading,
        list:cardData.list
    })
    try {
        const result=await cardObj.save();//save the user to db and return the result
        return result;
    } catch (error) {
        return error;
    }
}

module.exports=route;