const express=require('express');
const app = express();
app.set('view engine','ejs');
app.get('',(req,res)=>
{
    let student={
        name : " Ajay kumar",
        rollno_number: 2415000134,
        email : "abc12@gmail.com",
        age : 20
    }

res.render('home',{student});
});

app.listen(4000);
app.listen(4000, () => {
    console.log("Server is running on port http://localhost:4000");
})