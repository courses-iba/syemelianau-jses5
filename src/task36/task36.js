function readStreamAsString(stream, callback) {
    var data = '';
    stream.on('data', function (chunk) {
        data += chunk.toString();
    });
    stream.on('end', function () {
        callback(null, data);
    });
    stream.on('error', function (error) {
        callback(error);
    });
}

/* requests to eloquentjavascript.net/author,
 * asking for different types of content
 * by passing different Accept headers */
function requests() {
    var https = require('https');
    var types = ['text/plain', 'text/html', 'application/json'];
    types.forEach(function (type) {
        https.request({
            hostname: 'eloquentjavascript.net',
            path: '/author',
            headers: {
                Accept: type
            }
        }, function (response) {
            readStreamAsString(response, function (error, data) {
                /* writes out the content of the responses to each request */
                console.log(error ? error : data);
            });
        }).end();
    });
}
