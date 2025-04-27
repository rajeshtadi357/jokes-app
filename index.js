const express=require('express')
const cors=require('cors')
const jokes=require("./data.js")

const app=  express()


app.use(cors({
    origin: 'https://vercel.com/rajesh-tadis-projects/jokes-app-frontend1' // Replace with your frontend URL
}));

app.get('/', (req,res)=>{
    res.json({msg:"hello there , this is backend of jokes app"})
})

app.get('/jokes', (req,res)=>{
    res.json({jokes})
})

app.listen(3000,()=>{console.log("your server is running on port 3000");
})