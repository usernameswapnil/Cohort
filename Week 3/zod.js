/*const express = require("express");
const zod = require("zod");

const app = express();
app.use(express.json());

// Define Zod schema (expects an array of numbers)
const schema = zod.array(zod.number());

app.post("/", function (req, res) {
    const { kidneys } = req.body; // Destructure kidneys from request body

    if (!kidneys) {
        return res.status(400).json({ msg: "Missing 'kidneys' field in request body" });
    }

    const response = schema.safeParse(kidneys);

    if (!response.success) {
        return res.status(411).json({ msg: "Input is invalid", errors: response.error.errors });
    }

    res.json({ response });
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});*/
const express=require("express");
const app=express();
const zod=require("zod");
app.use(express.json());
const kidneyInput=zod.literal("1").or(zod.literal("2"));
app.post("/",function(req,res){
    const kidneyId=req.body.kidneyId;
    const validate=kidneyInput.safeParse(kidneyId);
    if(!validate.success){
        res.send("Input is incorrect!");
    }
    else{
        res.send("Fetching ur data....Your kidneyId is" + " "+ kidneyId);
    }
})
app.listen(3000);
