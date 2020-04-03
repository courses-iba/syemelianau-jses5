function trail(length) {
    var div = [];
    addEventListener('mousemove', function (event) {
        div.push(document.createElement('div'));
        div[div.length - 1].setAttribute('class', 'trail');
        div[div.length - 1].style.left = event.pageX - 3 + 'px';
        div[div.length - 1].style.top = event.pageY - 3 + 'px';
        document.body.appendChild(div[div.length - 1]);
        if (div.length > length) {
            document.body.removeChild(div[0]);
            div.shift();
        }
    });
}

/* the series of images
 * that would follow the mouse pointer as you moved it across the page */
trail(Math.random() * 100);
