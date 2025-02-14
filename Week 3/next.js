const express=require("express");
const app=express();
app.use(express.json());
app.post("/",function(req,res){
    //kidneys=[1,2]
    const kidneys=req.body.kidneys;
    const kidneylength=kidneys.length;
   
    res.send("you have"+ kidneylength+ "kidneys");
});

/*go to postman .... go to body...raw...type there
{
 "kidneys":[1,2]
}
and then run */ 

//if some error happens while writing the contents of the body like if the user writes kidney=[12324djscbh0] then what will will happen? therefore we use this
app.use(function(err,req,res,next){
    res.json({
        msg:"Something is wrong with our server"
    })
})
app.listen(3000);