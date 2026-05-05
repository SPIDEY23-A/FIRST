const fs = require('fs');
const url = require('url'); 
const http = require('http');
const path=require('path');

http.createServer((req, res) => { 
    
    const parsedUrl = url.parse(req.url, true);
    const date = new Date().toLocaleString(); 

    const logEntry = `${date} | Path: ${parsedUrl.pathname} : New Request Received\n`;

    fs.appendFile("Log.txt", logEntry, (err) => {
        if (err) console.log("Log write error:", err);
    });

    let filePath='';
    
    switch(parsedUrl.pathname) {
        case '/':
            filePath==path.join(__dirname,'./index.html');
            res.end('Welcome to homepage');
            break;
        case '/aboutUs':
            pathName=path.join(__dirname,'./aboutUs.html');
            res.end('Welcome to About Page');
            break;
        case '/contactUs':
            pathName=path.join(__dirname,'./contactUS.html');
            res.end("Welcome to contact us page");
            break;
        case '/Services':
            pathName=path.join(__dirname,'./Services');
            res.end("Here is our services");
            break;
        default:
            res.end("404 Page Not Found");
            break;
    }

}).listen(5000, 'localhost', (err) => {
    if(err) {
        console.log(err);
    } else {
        console.log("Server is listening on http://localhost:5000");
    }
});

