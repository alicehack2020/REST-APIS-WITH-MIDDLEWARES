const PrintMiddleware=(req,res,next)=>{
    console.log("Fetching all books")
    next()
}
module.exports=PrintMiddleware;