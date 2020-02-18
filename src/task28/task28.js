function shape(context, closed, filling) {
    /* function that used by trapezoid,
     * diamond and zigzag functions */
    context.beginPath();
    context.moveTo(arguments[3], arguments[4]);
    for (var i = 5; i < arguments.length; i += 2) {
        context.lineTo(arguments[i], arguments[i + 1]);
    }
    if (closed) {
        context.lineTo(arguments[3], arguments[4]);
    }
    if (filling) {
        context.fillStyle = filling;
        context.fill();
    } else {
        context.stroke();
    }
}

/* function that draws trapezoid
 * (a rectangle that is wider on one side) */
function trapezoid(context, filling, x1, y1, x2, y2, x3) {
    shape(
        context, true, filling,
        x1, y1, x1 + (x3 - x1) * 2, y1,
        x2 + (x3 - x2) * 2, y2, x2, y2
    );
}

/* function that draws red diamond
 * (a rectangle rotated 45 degrees or ¼π radians) */
function diamond(context, filling, x1, y1, x2) {
    var len = (x2 - x1) / 2;
    shape(
        context, true, filling,
        x1, y1, x1 + len, y1 - len,
        x2, y1, x1 + len, y1 + len
    );
}

/* function that draws zigzagging line */
function zigzag(context, x1, y1, x2, y2, number) {
    var len = (y2 - y1) / number;
    for (var i = 0; i < number; ++i) {
        shape(
            context, false, null,
            x1, y1 + len * i,
            x2, y1 + len * (i + 0.5),
            x1, y1 + len * (i + 1)
        );
    }
}

/* function that draws spiral made up of 100 straight line segments */
function spiral(context, x1, y1, step, turns, segments) {
    var angle = 0;
    turns = (2 * Math.PI) / (segments / turns);
    step = step / (2 * Math.PI);
    context.beginPath();
    context.moveTo(x1, y1);
    for (var i = 0; i < segments; ++i) {
        context.lineTo(
            x1 + step * angle * Math.cos(angle),
            y1 + step * angle * Math.sin(angle)
        );
        angle += turns;
    }
    context.stroke();
}

/* function that draws yellow star */
function star(context, x1, y1, radius, segments) {
    var angle = 0;
    var inc = (2 * Math.PI) / segments;
    context.beginPath();
    context.moveTo(
        x1 + radius * Math.cos(angle),
        y1 + radius * Math.sin(angle)
    );
    for (var i = 0; i < segments; ++i) {
        angle += inc;
        context.quadraticCurveTo(
            x1, y1,
            x1 + radius * Math.cos(angle),
            y1 + radius * Math.sin(angle)
        );
    }
    context.fillStyle = 'yellow';
    context.fill();
}
