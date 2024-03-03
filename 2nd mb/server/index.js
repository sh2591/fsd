const express=require('express')
const cors=require('cors')
const app=express();
app.use(express.json())
//handle cors issue
app.use(cors())

//create order api

app.post('/order',(req,res)=>{
    console.log(req.body)
})

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})