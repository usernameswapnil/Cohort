const express= require("express");
const jwt = require("jsonwebtoken");
const app=express();
app.use(express.json());

const jwtpassword="12345";//jwtpassword = "12345";: The secret key used to sign and verify JWT tokens.
const ALL_USERS=[
    {
        username:"Swapnil@gmail.com",
        password:"123",
        name:"Swapnil Singh",
    },
    {
        username:"Nikhil@gamil.com",
        password:"1234",
        name:"Nikhil Singh",
    },
    {
        username:"Tarang@gamil.com",
        password:"12345",
        name:"Tarang Singh",
    }
]
function userExists(username,password){
    let userExists=false;
    for(let i=0;i<ALL_USERS.length;i++){
        if(ALL_USERS[i].username==username && ALL_USERS[i].password==password){
            userExists=true;
        }
    }
    return userExists;
}
app.post("/signin",function(req,res){
    const username=req.body.username;
    const password=req.body.password;
    if(!userExists(username,password)){
        return res.status(403).json({
            msg:"User does not exist in our memory db",
        })
    }
    const token=jwt.sign({username: username},jwtpassword);
    return res.json({
        token,
    });
});
app.get("/users",function(req,res){
    const token=req.headers.authorization;
    try{
        const decoded=jwt.verify(token,jwtpassword);
        const username=decoded.username;
        res.send(username);
    }
    catch(err){
        return res.status(403).json({
            msg:"Invalid token",
        })  
    }

});
app.listen(3000);
