function server() {
    var http = require('http'), fs = require('fs'), mime = require('mime');
    var methods = {
        GET: get,
        PUT: put,
        MKCOL: mkcol,
        DELETE: del
    };

    http.createServer(function (req, res) {
        function respond(code, body, type) {
            if (!type) {
                type = 'text/plain';
            }
            res.writeHead(code, {'Content-Type': type});
            body && body.pipe ? body.pipe(res) : res.end(body);
        }

        req.method in methods
            ? methods[req.method](urlToPath(req.url), respond, req)
            : respond(405, 'Method ' + req.method + ' not allowed.');
    }).listen(8000);

    function get(path, respond, req) {
        var type = req.headers.type;
        var dirs = ['./', './main.js', './main.css', './favicon.ico'];
        if (!type) {
            type = dirs.indexOf(path) !== -1 ? 'file' : '';
            path += path === './' ? 'index.html' : '';
        }
        switch (type) {
            case 'file':
                fs.stat(path, function (err) {
                    err && err.code === 'ENOENT'
                        ? respond(404, 'Not found') : err
                        ? respond(500, err.toString()) : respond(
                            200, fs.createReadStream(path), mime.getType(path)
                        );
                });
                break;
            case 'path':
                fs.readdir(path, {withFileTypes: true}, function (err, files) {
                    if (err) {
                        respond(500, err.toString());
                    } else {
                        var list = [];
                        files.forEach(function (el) {
                            el.isDirectory()
                                ? list.push(el.name + '/')
                                : list.push(el.name);
                        });
                        respond(200, list.join('\n'));
                    }
                });
                break;
            default:
                respond(403, 'Forbidden');
                break;
        }
    }

    function put(path, respond, req) {
        var outStream = fs.createWriteStream(path);
        outStream.on('error', function (err) {
            respond(500, err.toString());
        });
        outStream.on('finish', function () {
            respond(204);
        });
        req.pipe(outStream);
    }

    function mkcol(path, respond) {
        fs.stat(path, function (err, stats) {
            if (err && err.code === 'ENOENT') {
                fs.mkdir(path, function (error) {
                    error && error.code !== 'ENOENT'
                        ? respond(500, error.toString())
                        : respond(200, path + ' created successfully');
                });
            } else {
                err ? respond(500, err.toString()) : stats.isDirectory()
                    ? respond(204) : respond(400, 'bad request');
            }
        });
    }

    function del(path, respond) {
        fs.stat(path, function (err, stats) {
            if (err && err.code === 'ENOENT') {
                respond(204);
            } else {
                err ? respond(500, err.toString()) : stats.isDirectory()
                    ? fs.rmdir(path, respondErrorOrNothing(respond))
                    : fs.unlink(path, respondErrorOrNothing(respond));
            }
        });
    }
}

/* Since the file server serves up any kind of file and even includes the
 * right Content-Type header, you can use it to serve a website. Since it
 * allows everybody to delete and replace files, it would be an interesting
 * kind of website: one that can be modified, vandalized, and destroyed by
 * everybody who takes the time to create the right HTTP request.
 * Still, it would be a website.
 * Write a basic HTML page that includes a simple JavaScript file.
 * Put the files in a directory served by the file server
 * and open them in your browser.

 * Next, as an advanced exercise or even a weekend project, combine all the
 * knowledge you gained from this book to build a more user-friendly
 * interface for modifying the website from inside the website.
 * Use an HTML form (Chapter 18) to edit the content of the files that make
 * up the website, allowing the user to update them on the server by using
 * HTTP requests as described in Chapter 17.

 * Start by making only a single file editable. Then make it so that the
 * user can select which file to edit. Use the fact that our file server
 * returns lists of files when reading a directory.

 * Don’t work directly in the code on the file server, since if you make a
 * mistake you are likely to damage the files there. Instead, keep your
 * work outside of the publicly accessible directory
 * and copy it there when testing.

 * If your computer is directly connected to the Internet, without a
 * firewall, router, or other interfering device in between, you might be
 * able to invite a friend to use your website. To check, go to
 * whatismyip.com, copy the IP address it gives you into the address bar of
 * your browser, and add :8000 after it to select the right port. If that
 * brings you to your site, it is online for everybody to see. */

function urlToPath(url) {
    return '.' + decodeURIComponent(
        require('url').parse(url).pathname.replace(/\.\.[\/\\]/g, '')
    );
}

function respondErrorOrNothing(respond) {
    return function (error) {
        error ? respond(500, error.toString()) : respond(204);
    };
}
