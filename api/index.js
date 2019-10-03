

import Express from "express"

import bodyParser from "body-parser"

const app = Express()

app.use(bodyParser.urlencoded({extended:false})) ;

const PORT = process.env.PORT || 8000 ;

// Default welcome page

app.get("*",(req,res)=>{
    res.status(200).send({
        message: "Welcome to API"
    })
})

app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`);
    
})

export default app ;