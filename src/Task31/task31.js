function request(url, header, type) {
    /* request to fetch any formats of this resource */
    var req = new XMLHttpRequest();
    req.open('GET', url, true);
    req.setRequestHeader(header, type);
    req.addEventListener('load', function () {
        console.log(req.status < 400 ? req.responseText : req.status);
    });
    req.send(null);
}
