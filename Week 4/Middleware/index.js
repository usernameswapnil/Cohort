// without the use of any middleware
const express=require("express");
const app=express();

function isOldEnough(age){
    if(age<18){
        return false;
    }
    else{
        return true;
    }
}

app.get("/park",function(req,res){
    if(isOldEnough(req.query.age)){
        res.json({
            msg:"You can take the ride",
        })
    }
    else{
        res.status(411).json({
            msg:"You cannot take the ride...Grow up kid",
        })
    }
})
app.listen(3000);
