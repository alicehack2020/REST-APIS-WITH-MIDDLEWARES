const express=require("express")
const router=express.Router()
 

    router.get("/books",(req,res,next)=>{
        res.send("welcome");
      //  next()
    })

    router.get("/books/:name",(req,res,next)=>{
        var data=req.params.name
        res.send({bookName:data});
      //  next()
    })
 



module.exports=router;