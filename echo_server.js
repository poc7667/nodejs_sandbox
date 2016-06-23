var fs = require('fs');
var    http = require('http');
var StringDecoder = require('string_decoder').StringDecoder;


var myCallBack = function(err, contents){
    var lines = contents.toString().split('\n').length - 1
    console.log(lines);
}
// fs.readFile('./development.log');
// fs.readFile('./development.log', myCallBack);
// fs.readFileSync('./test.log', myCallBack);


// var server = http.createServer(function (req, res) {
//     // var cookies = cookie.parse(req.headers.cookie);
//     res.end('I got these cookies: '  + '\n');
// });
// server.on('close', function(){
//     console.log("im closing...")
// })
// server.listen(8000);
var decoder = new StringDecoder('utf8')

var server = http.createServer(function(req, res){
    res.writeHead(200);
    req.on('data', function(chunk){
        res.write(chunk)
        console.log(decoder.write(chunk))
    });
    req.on('end', function(){
        res.end();
    })
}).listen(8000)