const express=require("express");
const app=express();
app.get("/test",function(req,res){
    const username=req.headers.username;
    const password=req.headers.password;
    const kidneyId=req.query.kidneyId;
    if(username!="Swapnil" || password!="jordanshoes@123"){
        res.status(400).json({"msg":"Sorry! Your input is wrong!"});
        return;
    }
    if(kidneyId !=1 && kidneyId!=2){
        res.status(400).json({"msg":"Sorry! Your input is wrong!"});
        return;
    }
    res.json({
        msg:"Your kidney is fine"
    })
});
app.listen(3000);