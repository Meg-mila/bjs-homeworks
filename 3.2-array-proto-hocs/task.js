'use strict'

// Задача 2
function sleep(milliseconds) {
    let e = new Date().getTime() + milliseconds;
    while (new Date().getTime() <= e) {
    }
}

function sum(...args) {
    sleep(100);
    return args.reduce((sum, arg) => {
        return sum += +arg;
    }, 0);
}

function compareArrays(arr1, arr2) {
    if (arr1.length === arr2.length) {
        return arr1.every((item, index) => item === arr2[index]);
    } else {
        return false;
    }
}

function memorize(fn, limit) {
    const memory = [];

    return function (...args) {
        const memoryFound = memory.find(item => compareArrays(item.args, args));
        if (memoryFound) {
            return memoryFound.result;
        }
        const resultFn = fn(...args);
        memory.push({
            args: args,
            result: resultFn
        });

        if (memory.length > limit) {
            memory.shift();
        }

        return resultFn;
    }
}

compareArrays([8, 9], [6]);
compareArrays([8, 9, 5, 4], [8, 9, 5, 4, 8, 3, 5]);
compareArrays([9, 2, 4, 8, 2], [9, 2, 4]);
compareArrays([1, 2, 3], [2, 3, 1]);
compareArrays([8, 1, 2], [8, 1, 2]);

