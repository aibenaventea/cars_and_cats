const http = require('http');
const fs = require('fs');
const server = http.createServer((request, response) => {
    if(request.url === '/cars_and_cats') {
        fs.readFile('./views/index.html', 'utf8', (errors, contents) => {
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents); 
            response.end();
        });
    }
    else if (request.url === "/cars") {
        fs.readFile('./views/cars.html', 'utf8', (errors, contents) => {
            response.writeHead(200, {'Content-type': 'text/html'});
            response.write(contents); 
            response.end();
        });
    }
    else if (request.url === "/cars/nueva") {
        fs.readFile('./views/carForm.html', 'utf8', (errors, contents) => {
            response.writeHead(200, {'Content-type': 'text/html'});
            response.write(contents); 
            response.end();
        });
    }
    else if (request.url === "/cats") {
        fs.readFile('./views/cats.html', 'utf8', (errors, contents) => {
            response.writeHead(200, {'Content-type': 'text/html'});
            response.write(contents); 
            response.end();
        });
    }  
    else if (request.url ==="/stylesheets/style.css") {
        fs.readFile('./stylesheets/style.css', 'utf8', (errors, contents) => {
            response.writeHead(200, {'Content-type': 'text/css'});
            response.write(contents); 
            response.end();
        });
    }
    else if(request.url === '/images/RussianBlue.jpg'){
        // observa que no vamos a incluir la codificación utf8
        fs.readFile('./images/RussianBlue.jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
    }    
    else if(request.url === '/images/JapaneseBobtail.jpg'){
        // observa que no vamos a incluir la codificación utf8
        fs.readFile('./images/JapaneseBobtail.jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
    }    
    else if(request.url === '/images/Bengal.jpg'){
        // observa que no vamos a incluir la codificación utf8
        fs.readFile('./images/Bengal.jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
    }    
    else if(request.url === '/images/Somali.jpg'){
        // observa que no vamos a incluir la codificación utf8
        fs.readFile('./images/Somali.jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
    }
    else if(request.url === '/images/spress.jpg'){
        // observa que no vamos a incluir la codificación utf8
        fs.readFile('./images/spress.jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
    }    
    else if(request.url === '/images/xl7.jpg'){
        // observa que no vamos a incluir la codificación utf8
        fs.readFile('./images/xl7.jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
    }    
    else if(request.url === '/images/jimny.jpg'){
        // observa que no vamos a incluir la codificación utf8
        fs.readFile('./images/jimny.jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
    }    
    else if(request.url === '/images/vitara.jpg'){
        // observa que no vamos a incluir la codificación utf8
        fs.readFile('./images/vitara.jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
    }        
    else {
        response.end('404 Not Found');
    }
});
let puerto = 6789
server.listen(puerto);
console.log(`Running in localhost at port ${puerto}`);