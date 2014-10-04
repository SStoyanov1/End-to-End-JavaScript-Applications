//Create file upload web site with NodeJS. You should have the option to upload
//a file and be given an unique URL for its download. Use GUID.
//You are not allowed to use ExpressJS


var formidable = require('formidable'),
    http = require('http'),
    util = require('util');

http.createServer(function(req, res) {
    if (req.url == '/upload' && req.method.toLowerCase() == 'post') {
        // parse a file upload
        var form = new formidable.IncomingForm();

        form.parse(req, function(err, fields, files) {
            res.writeHead(200, {'content-type': 'text/plain'});
            res.write('Received upload:\n\n');
            res.end(util.inspect(files));
        });

        return;
    }

    // show a file upload form
    res.writeHead(200, {'content-type': 'text/html'});
    res.end(
            '<form action="/upload" enctype="multipart/form-data" method="post">'+
            '<input type="file" name="upload" multiple="multiple"><br>'+
            '<input type="submit" value="Upload">'+
            '</form>'
    );
}).listen(1234);

console.log('Server is running on port ' + 1234);