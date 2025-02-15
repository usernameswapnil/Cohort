// using a middleware for the same situation
const express=require("express");
const app=express();

function middlewareisOldEnough(req,res,next){
    const age=req.query.age;
    if(age>18){
        next();
    }
    else{
        res.json({
            msg:"You are not allowed to enter the park",
        })
    }
}
// app.use(middlewareisOldEnough); ----> globally initilized for all ex. ride1,ride2 etc
app.get("/ride1",middlewareisOldEnough,function(req,res){
    res.json({
        msg:"You can enter the park !!!",
    })
})
app.get("/ride2",middlewareisOldEnough,function(req,res){
    res.json({
        msg:"You can enter the park !!!",
    })
})
app.listen(3000);
