const projName = 'TI - AW';

var http = require('http')
var fs = require('fs')

var server = http.createServer(function(req, res) {
    console.log('request was made: ' + req.url)
    res.writeHead(200, { 'Content-Type': 'text/html' })
    var myReadStream = fs.createReadStream('src/index.html', 'utf8') //__dirname + 
    myReadStream.pipe(res)
})

var port = process.env.PORT || 8080
server.listen(port, '0.0.0.0')

// var server_port = process.env.YOUR_PORT || process.env.PORT || 80;
// var server_host = process.env.YOUR_HOST || '0.0.0.0';
// server.listen(server_port, server_host, function() {
//     console.log('Listening on port %d', server_port);
// });


console.log('yo dawgs, now listening to port 0.0.0.0:8080')

// window.location.replace("../index.html")

// var http = require('http');
// var fs = require('fs');
// var path = require('path');

// http.createServer(function(request, response) {

//     console.log('request starting for ');
//     console.log(request);

//     var filePath = '.' + request.url;
//     if (filePath == './')
//         filePath = 'index.html';

//     console.log(filePath);
//     var extname = path.extname(filePath);
//     var contentType = 'text/html';
//     switch (extname) {
//         case '.js':
//             contentType = 'text/javascript';
//             break;
//         case '.css':
//             contentType = 'text/css';
//             break;
//     }

//     path.exists(filePath, function(exists) {

//         if (exists) {
//             fs.readFile(filePath, function(error, content) {
//                 if (error) {
//                     response.writeHead(500);
//                     response.end();
//                 } else {
//                     response.writeHead(200, { 'Content-Type': contentType });
//                     response.end(content, 'utf-8');
//                 }
//             });
//         } else {
//             response.writeHead(404);
//             response.end();
//         }
//     });

// }).listen(5000);

// console.log('Server running at http://127.0.0.1:5000/');