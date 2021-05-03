const http = require('http');
const fs = require('fs');

// http => (request, response)
//aplicaion web -> programa qeu procesa informacion que es enviada al servidor web
//servidor -> manipula el protocolo 
//const data = fs.readFileSync('./WWW/file.txt');

// HTML. CSS, JS, IMG, Audio, Video
http.createServer((request, response) =>{
 console.log(request.url);
 const file = request.url == '/'? './WWW/index.html' : `./WWW${request.url}`;
 fs.readFile(file, (err,data)=>{
 if(err){
  response.writeHead(404, {"Content-Type":"text/plain"});
  response.write("Not Found");
  response.end();
 }else{
  //"hola.como estas".split(".").pop() regresa el de la derecha
  const extension = file.split('.').pop();
  switch(extension){
   case 'txt':
    response.writeHead(200, {"Content-Type":"text/plain"});
   break; 
   case 'html':  
    response.writeHead(200, {"Content-Type":"text/html"});
   break;
   case 'jpeg':  
     response.writeHead(200, {"Content-Type":"image/jpeg"});
    break;
   case 'css':  
     response.writeHead(200, {"Content-Type":"text/css"});
    break;
   case 'js':  
     response.writeHead(200, {"Content-Type":"text/javascript"});
    break;
  }
  response.write(data);
  response.end();
 }
 });
}).listen(4444);

