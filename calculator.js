const express=require("express");
const bodyParser=require("body-parser");

const app=express();
app.use(bodyParser.urlencoded({extended: true}));
app.get("/",function(req,res){
  res.sendFile(__dirname + "/bmicalculator.html");
});
app.post("/",function(req,res){
  var num1=Number(req.body.WEIGHT);
  var num2=Number(req.body.HEIGHT);

  var result= num1/(num2*num2);

  res.send("YOUR BMI IS: " + result);
})
app.listen(3000,function(){
  console.log("Port 3000 STARTED");
});
