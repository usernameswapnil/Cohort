const express=require("express");
const app=express();
app.use(express.json());

const user=[{
  name:"Ved",
  kidneys:[{
    healthy:false
  }]
}]


app.get("/",function(req,res){
  const Vedkidneys=user[0].kidneys; //user[0].kidneys accesses the kidneys objects inside the first element. 
  const numberofkidneys=Vedkidneys.length;
  let numberofhealthykidneys=0; 
  for(let i=0;i<Vedkidneys;i++){
    if(Vedkidneys[0].healthy){
      numberofhealthykidneys=numberofhealthykidneys+1;
    }
  }
  const numberofunhealthykidneys= numberofkidneys-numberofhealthykidneys;
  res.json({
    numberofkidneys,
    numberofhealthykidneys,
    numberofunhealthykidneys
  }) 
})

app.post("/",function(req,res){
  const ishealthy=req.body.ishealthy;
  //req.body:this contains the data sent by the client in the request body
  //req.body.ishealthy: this accesses the ishealthy key inside the rquest body
  user[0].kidneys.push({
    healthy:ishealthy
  })
 
  res.json({
    msg:"Done!"
  })
})

app.listen(3000);
