const express=require("express");
const app=express();
function firstmiddleware(req,res,next){
    const username=req.headers.username;
    const password=req.headers.password;
    if(username!="Swapnil" || password!="viratkohli@123"){
        res.status(403).json({"msg":"Incorrect Credentials"});
    }
    else{
        next();
    }
} 
function secondmiddleware(req,res,next){
    const collegeId=req.query.collegeId;
    if(collegeId!=1 && collegeId!=2){
        res.status(403).json({"msg":"Incorrect Credentials"});
    }
    else{
        next();
    }
}

app.get("/test",firstmiddleware,secondmiddleware,function(req,res){
    res.json({
        msg:"WELCOME TO OUR WEBSITE!!!!"
    })
})
app.listen(3000);
