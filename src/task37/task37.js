function urlToPath(url) {
    /* fixed problem with relative paths */
    var path = require('url').parse(url).pathname.replace(/\.\.[\/\\]/g, '');
    return '.' + decodeURIComponent(path);
}
