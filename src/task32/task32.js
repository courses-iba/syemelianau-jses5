function all(promises) {
    /* returns a promise that waits for all of
     * the promises in the array to finish */
    return new Promise(function (success, fail) {
        var arr = [];
        var pending = promises.length;
        promises.length === 0 ? success(arr) :
            promises.forEach(function (promise, i) {
                promise.then(function (val) {
                    arr[i] = val;
                    --pending;
                    if (pending === 0) {
                        success(arr);
                    }
                }, function (err) {
                    fail(err);
                });
            });
    });
}
