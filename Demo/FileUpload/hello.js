var http = require('http');
var formidable = require('formidable');
var fs = require('fs');
var path = require("path");

http.createServer(function (req, res) {
	if (req.url == '/fileupload') {
	    var form = new formidable.IncomingForm();
	    form.parse(req, function (err, fields, files) {
	      	var oldpath = files.filetoupload.path;
	      	var newpath = './content/' + files.filetoupload.name;
	      	module.exports = function move(oldPath, newPath, callback) {
		      	fs.rename(oldpath, newpath, function (err) {
			        if (err) {
			            if (err.code === 'EXDEV') {
			                copy();
			            } else {
			                callback(err);
			            }
			            return;
			        }
			        callback();
			    });
		        function copy() {
			        var readStream = fs.createReadStream(oldpath);
			        var writeStream = fs.createWriteStream(newpath);
			        readStream.on('error', callback);
			        writeStream.on('error', callback);
			        readStream.on('close', function () {
			            fs.unlink(oldpath, callback);
			        });
			        readStream.pipe(writeStream);
			    }
			}
		});
	} else {
    	res.writeHead(200, {'Content-Type': 'text/html'});
    	res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
    	res.write('<input type="file" name="filetoupload"><br>');
    	res.write('<input type="submit">');
    	res.write('</form>');
    	return res.end();
  	}
}).listen(8080);