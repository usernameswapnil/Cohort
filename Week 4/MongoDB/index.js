//syntax for adding info to our own db

/*const mongoose=require("mongoose");
mongoose.connect("mongodb://Admin69:swapnilhero123@cluster1-shard-00-00.rpirq.mongodb.net:27017,cluster1-shard-00-01.rpirq.mongodb.net:27017,cluster1-shard-00-02.rpirq.mongodb.net:27017/?replicaSet=atlas-tmwehx-shard-0&ssl=true&authSource=admin")

const User=mongoose.model('Users' , {name: String, email: String, password: String});

//'Users' is a table name that we created

const user=new User({
    name: 'Swapnil Singh',
    email: 'swappy@gmail.com',
    password: '12345'
});

user.save();*/

//using post...taking info from the user and then adding it in our db

const express=require("express");
const mongoose=require("mongoose");
const app= express();
app.use(express.json());
mongoose.connect("mongodb://Admin69:swapnilhero123@cluster1-shard-00-00.rpirq.mongodb.net:27017,cluster1-shard-00-01.rpirq.mongodb.net:27017,cluster1-shard-00-02.rpirq.mongodb.net:27017/?replicaSet=atlas-tmwehx-shard-0&ssl=true&authSource=admin")

const User=mongoose.model('Users' , {name: String, email: String, password: String});

app.post("/signup", async function(req,res){
    const name=req.body.name;
    const username=req.body.username;
    const password=req.body.password;
    const existingUser= await User.findOne({email: username}); //Find a user whose email field matches the value of username.
    if(existingUser){
        return res.status(400).send("Username already exists");
    }
    const user=new User({
        name: 'Swapnil Singh',
        email: 'swappy@gmail.com',
        password: '12345'
    });
    user.save();
    res.json({
        "msg":"User created successfully"
    })
})

