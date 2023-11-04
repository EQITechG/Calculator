const express = require("express");
const bodyParser = require("body-parser")
const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.get("/", (req,res)=>{
    res.sendFile(__dirname + "/index.html");
})

app.post("/", (req,res)=>{
    console.log(req.body);

    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var op = Number(req.body.operator);

var calcResult = 0;
if (op === "*"){
    calcResult = num1 * num2;
}else if (op === "-"){
    calcResult = num1 - num2;
}else if (op === "/"){
    calcResult = num1 / num2;
}else{
    calcResult = num1 + num2;
    
}

    res.send("The Result is: " +calcResult);
})



app.listen(3000, ()=>{
    console.log("Server started at port 3000")
})


// function calculate(num1,num2,opp){
//     opp(num1,num2);

// }


// function multiply(num1,num2){
//     return num1 * num2;
// }
// function minus(num1,num2){
//     return num1 - num2;
// }
// function add(num1,num2){
//     return num1 + num2;
// }
// function divide(num1,num2){
//     return num1 / num2;
// }
