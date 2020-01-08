function multiplicatorUnitFailure() {
}

function primitiveMultiply(a, b) {
    if (Math.random() < 0.5) {
        return a * b;
    } else {
        throw new multiplicatorUnitFailure();
    }
}

/* wraps 'primitiveMultiply' function
 * and just keeps trying until a call succeeds,
 * after which it returns the result */
function reliableMultiply(a, b) {
    try {
        return primitiveMultiply(a, b);
    } catch (e) {
        if (e instanceof multiplicatorUnitFailure) {
            return reliableMultiply(a, b);
        } else {
            throw e;
        }
    }
}
