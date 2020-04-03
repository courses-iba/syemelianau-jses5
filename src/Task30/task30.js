function animation(canvas) {
    var context = canvas.getContext('2d');
    var lastTime = null;
    /* bouncing ball that moves at a constant speed
     * and bounces off the box’s sides when it hits them */
    var ball = {
        x: 0,
        y: 0,
        point: {
            x: canvas.width / 2,
            y: canvas.height / 2
        },
        radius: canvas.height / 100 * 3,
        speed: 0.3,
        /* moving direction */
        direction: {
            k: 2 * Math.random() - 1,
            sign: Math.round(Math.random())
        },
        move: function (step) {
            /* calculating of current position */
            this.x = this.direction.sign
                ? this.x + this.speed / step
                : this.x - this.speed / step;
            this.y = this.direction.k * this.x;
            if (leftCollision() || rightCollision()) {
                this.point.y += 2 * this.y;
                this.direction.k = -this.direction.k;
                this.direction.sign = this.direction.sign ? 0 : 1;
                this.move(step);
            }
            if (topCollision() || bottomCollision()) {
                this.point.y += 2 * this.y;
                this.direction.k = -this.direction.k;
                this.move(step);
            }
        }
    };

    /* left edge collision */
    function leftCollision() {
        return ball.x + ball.point.x <= ball.radius
            && !ball.direction.sign;
    }

    /* right edge collision */
    function rightCollision() {
        return canvas.width - (ball.x + ball.point.x) <= ball.radius
            && ball.direction.sign;
    }

    /* top edge collision */
    function topCollision() {
        return ball.direction.sign
            ? ball.y + ball.point.y <= ball.radius
            && ball.direction.k < 0
            : ball.y + ball.point.y <= ball.radius
            && ball.direction.k > 0;
    }

    /* bottom edge collision */
    function bottomCollision() {
        return ball.direction.sign
            ? canvas.height - (ball.y + ball.point.y) <= ball.radius
            && ball.direction.k > 0
            : canvas.height - (ball.y + ball.point.y) <= ball.radius
            && ball.direction.k < 0;
    }

    /* draws box with a bouncing ball in it */
    function updateAnimation(step) {
        context.fillStyle = 'white';
        context.fillRect(0, 0, canvas.width, canvas.height);
        context.beginPath();
        context.arc(
            ball.x + ball.point.x, ball.y + ball.point.y,
            ball.radius, 0, 2 * Math.PI
        );
        context.fillStyle = 'red';
        context.fill();
        ball.move(step);
    }

    function frame(time) {
        if (lastTime != null) {
            updateAnimation(Math.min(100, time - lastTime) / 1000);
        }
        lastTime = time;
        requestAnimationFrame(frame);
    }

    requestAnimationFrame(frame);
}
