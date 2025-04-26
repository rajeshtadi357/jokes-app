const express=require('express')
const cors=require('cors')
const jokes=require("./data.js")

const app=  express()


app.use(cors())

app.get('/', (req,res)=>{
    res.json({msg:"hello there , this is backend of jokes app"})
})

app.get('/jokes', (req,res)=>{
    res.json({jokes})
})

app.listen(3000,()=>{console.log("your server is running on port 3000");
})