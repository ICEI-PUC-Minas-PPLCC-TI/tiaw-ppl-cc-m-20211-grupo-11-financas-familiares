const projName = 'TI - AW';

var http = require('http')
var fs = require('fs')

var server = http.createServer(function(req, res) {
    console.log('request was made: ' + req.url)
    res.writeHead(200, { 'Content-Type': 'text/html' })
    var myReadStream = fs.createReadStream('src/_index.html', 'utf8') //__dirname + 
    myReadStream.pipe(res)
})

var port = process.env.PORT || 8080
server.listen(port, '0.0.0.0')

console.log('yo dawgs, now listening to port 0.0.0.0:8080')