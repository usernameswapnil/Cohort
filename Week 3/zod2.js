const express=require("express");
const app=express();
const zod=require("zod");
app.use(express.json());
//input should be sent in the form of an arry in the body
const schema=zod.array(zod.number());
app.post("/",function(req,res){
    const info=req.body.info;
    // safeParse karna hai info ka wrt to schema
    const correctInfo=schema.safeParse(info);
    if(!correctInfo.success){
        res.send("Enter your input again");
    }
    else{
        res.send("All is well");
    }   
})
app.listen(3000);