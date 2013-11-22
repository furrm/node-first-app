//require.paths.unshift(__dirname + "/vendor");

//var http = require('http'),
//    sys = require('sys'),
//    nodeStatic = require('node-static/lib/node-static');

var http = require('http')
    , sys = require('sys');

var port = process.env.port || 1337;

//http.createServer(function (req, res) {
//    var file = new nodeStatic.server('./public', {
//        cache:false
//    });
//
//    req.addListener('end',function(){
//
//    });
//
//}).listen(1337, '127.0.0.1');
//console.log('Server running at http://127.0.0.1:1337/');


http.createServer(function (req, res) {
    console.log('A new request arrived with HTTP headers:\n\n' + JSON.stringify(req.headers));
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello Worlds\n');
//    res.write(sys.inspect(req)); // Prints out the contents of the request
    res.end();
}).listen(port);
console.log('Server running at http://127.0.0.1:1337/');