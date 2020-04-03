function execute() {

    /* You can create a <textarea> element to hold the content of the file that
     * is being edited. A GET request, using XMLHttpRequest, can be used to get
     * the current content of the file. You can use relative URLs like
     * index.html, instead of http://localhost:8000/index.html, to refer to
     * files on the same server as the running script.
     * Then, when the user clicks a button (you can use a <form> element and
     * "submit" event or simply a "click" handler), make a PUT request to
     * the same URL, with the content of the <textarea> as request body,
     * to save the file. You can then add a <select> element that contains all
     * the files in the server’s root directory by adding <option> elements
     * containing the lines returned by a GET request to the URL /. When the
     * user selects another file (a "change" event on the field), the script
     * must fetch and display that file. Also make sure that when saving a
     * file, you use the currently selected filename. Unfortunately, the server
     * is too simplistic to be able to reliably read files from subdirectories
     * since it does not tell us whether the thing we fetched with a GET
     * request is a regular file or a directory.
     * Can you think of a way to extend the server to address this? */

    var slash = '/';
    var form = {
        create: {
            file: document.querySelector('#createFile'),
            dir: document.querySelector('#createDirectory')
        },
        save: document.querySelector('#save'),
        del: document.querySelector('#delete'),
        back: document.querySelector('#back'),
        file: document.querySelector('#file'),
        dir: document.querySelector('#directory'),
        select: document.querySelector('select'),
        text: document.querySelector('textarea')
    };
    form.dir.value = slash;
    directory(form);
    addEventListeners(form, slash);
}

function addEventListeners(form, slash) {
    form.create.file.addEventListener('click', function () {
        createFile(form.dir.value + form.file.value, '');
        form.file.value = '';
        form.file.dispatchEvent(new Event('input'));
    });
    form.create.dir.addEventListener('click', function () {
        form.dir.value += form.file.value;
        form.file.value = '';
        createDirectory(form.dir.value);
        form.file.dispatchEvent(new Event('input'));
    });
    form.save.addEventListener('click', function () {
        createFile(form.dir.value + form.file.value, form.text.value);
    });
    form.del.addEventListener('click', function () {
        del(form.dir.value + form.file.value);
        if (form.file.value) {
            form.file.value = '';
        } else {
            form.dir.value = form.dir.value.slice(0,
                form.dir.value.slice(0,
                    form.dir.value.length - 1
                ).lastIndexOf(slash) + 1
            );
        }
        form.file.dispatchEvent(new Event('input'));
    });
    form.back.addEventListener('click', function () {
        form.dir.value = form.dir.value.slice(0,
            form.dir.value.slice(0,
                form.dir.value.length - 1
            ).lastIndexOf(slash) + 1
        );
        form.file.value = '';
        form.file.dispatchEvent(new Event('input'));
    });
    form.file.addEventListener('input', function () {
        form.select.value = '';
        form.text.value = '';
        if (this.value) {
            var dir = this.value + slash;
            for (var i = 0; i < form.select.childNodes.length; ++i) {
                if (form.select.childNodes[i].value === this.value) {
                    form.select.value = this.value;
                    form.create.file.disabled = true;
                    form.create.dir.disabled = true;
                    condition(form);
                    return;
                }
                if (form.select.childNodes[i].value === dir) {
                    form.select.value = dir;
                    form.create.file.disabled = true;
                    form.create.dir.disabled = true;
                    form.save.disabled = true;
                    form.del.disabled = false;
                    return;
                }
            }
            form.create.file.disabled = false;
            form.create.dir.disabled = false;
            form.del.disabled = true;
        } else {
            form.create.file.disabled = true;
            form.create.dir.disabled = true;
            form.dir.dispatchEvent(new Event('input'));
        }
        form.save.disabled = true;
    });
    form.dir.addEventListener('input', function () {
        if (this.value !== slash) {
            form.back.disabled = false;
            form.del.disabled = false;
        } else {
            form.back.disabled = true;
            form.del.disabled = true;
        }
        directory(form);
    });
    form.select.addEventListener('change', function () {
        form.file.value = this.value;
        form.file.dispatchEvent(new Event('input'));
    });
}

function condition(form) {
    if (/\//.test(form.file.value)) {
        form.del.disabled = false;
        form.dir.value += form.file.value;
        form.file.value = '';
        form.file.dispatchEvent(new Event('input'));
    } else {
        form.save.disabled = false;
        form.del.disabled = false;
        form.text.value = file(form.dir.value, form.file.value);
    }
}

function directory(form) {
    while (form.select.childNodes.length) {
        form.select.removeChild(
            form.select.childNodes[form.select.childNodes.length - 1]
        );
    }
    request('GET', form.dir.value, null, 'path').split('\n')
        .forEach(function (element) {
            var option = document.createElement('option');
            option.textContent = element;
            option.style.color = /\//.test(element) ? 'black' : 'gray';
            form.select.appendChild(option);
        });
}

function file(path, filename) {
    return request('GET', path + filename, null, 'file');
}

function createFile(filename, text) {
    return request('PUT', filename, text);
}

function createDirectory(path) {
    return request('MKCOL', path, null);
}

function del(path) {
    return request('DELETE', path, null);
}

function request(method, path, body, type) {
    var req = new XMLHttpRequest();
    req.open(method, path, false);
    req.setRequestHeader('type', type);
    req.send(body);
    return req.status < 400
        ? req.responseText
        : 'Request failed: ' + req.status + '\n' + req.responseText;
}
