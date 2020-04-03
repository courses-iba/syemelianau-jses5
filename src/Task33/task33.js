function execute(code, button, output) {
    button.addEventListener('click', function () {
        var exec = Function;
        try {
            /* displays value of the function */
            output.textContent = exec(code.value)();
        } catch (error) {
            /* displays any error that function raised */
            output.textContent = error;
        }
    });
}
