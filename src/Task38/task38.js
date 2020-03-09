function mkcol(path, respond) {
    fs.stat(path, function (error, stats) {
        /* tries to create a directory, when no file is found */
        if (error && error.code === 'ENOENT') {
            /* creates a directory */
            fs.mkdir(path, function (err) {
                err && err.code !== 'ENOENT'
                    ? respond(500, err.toString())
                    : respond(200, path + ' created successfully');
            });
        } else {
            error ? respond(500, error.toString()) : stats.isDirectory()
                ? respond(204) : respond(400, 'bad request');
        }
    });
}
