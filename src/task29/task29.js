function chart(context) {
    /* dataset */
    var results = [
        {name: 'Satisfied', count: 1043, color: 'lightblue'},
        {name: 'Neutral', count: 563, color: 'lightgreen'},
        {name: 'Unsatisfied', count: 510, color: 'pink'},
        {name: 'No comment', count: 175, color: 'silver'}
    ];
    var total = results.reduce(function (sum, choice) {
        return sum + choice.count;
    }, 0);
    var currentAngle = -0.5 * Math.PI;
    var centerX = 300, centerY = 150, radius = 100;
    context.font = '1.6em Helvetica';
    context.textBaseline = 'middle';
    results.forEach(function (result) {
        var sliceAngle = (result.count / total) * 2 * Math.PI;
        /* automatic text positioning */
        var position = currentAngle + sliceAngle / 2;
        context.textAlign = (position % (2 * Math.PI) >= (Math.PI / 2)) &&
        (position % (2 * Math.PI) <= (3 * Math.PI / 2)) ? 'end' : 'start';
        context.fillStyle = result.color;
        context.fillText(
            result.name,
            centerX + (radius + 15) * Math.cos(position),
            centerY + (radius + 15) * Math.sin(position)
        );
        context.beginPath();
        context.arc(
            centerX, centerY, radius,
            currentAngle, currentAngle + sliceAngle
        );
        currentAngle += sliceAngle;
        context.lineTo(centerX, centerY);
        context.fillStyle = result.color;
        context.fill();
    });
    /* the pie chart where name of each category
     * is shown next to the slice that represents it */
}
