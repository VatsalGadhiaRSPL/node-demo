var http = require('http');
var s_dt = require('./modules/datemodule')

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('Hello Vatsal !!!<br/>Current Time is : ' + s_dt.myDateTime());
    res.end();
}).listen(8081);