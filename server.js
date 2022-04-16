const express=require('express')
const BookRouter=require("./Router/BookRouter")
const PrintMiddleware=require("./middleware/PrintMiddleware")
const app=express()
app.use(PrintMiddleware)
app.use(BookRouter)

app.listen(3000,()=>{
    console.log("server started");
})