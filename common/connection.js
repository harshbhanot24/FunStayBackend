const mongoose=require('mongoose')
    const uri="mongodb+srv://admin:Archer@123@cluster0-njc4r.mongodb.net/test?retryWrites=true";
    const url="mongodb://localhost:27017/Ecom"
    mongoose.connect(url, {useNewUrlParser: true}).
    then(()=>{console.log('connectd')}).catch(err=>console.log(err))
  
module.exports=mongoose;