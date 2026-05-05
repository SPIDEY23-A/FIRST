const { name } = require('ejs');
const express = require('express');
const app = express();

app.set('view engine','ejs');

app.get('',(req,res)=>{
    let student={
        name:"Ajay kumar",
        roll:2415000134,
        email:'abc@gmail.com',
        age:20,
        hobbies:['Cricket','Codding','Listening Music','Travelling']
    }
    //res.render('home',{student});
    res.render('home',{stu:student});
})
app.listen(3000,()=>{
    console.log("Server is listening at http://localhost:3000")
})