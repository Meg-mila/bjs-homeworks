'use strict'
// Задача 1

function parseCount(value) {
    const parsed = Number.parseInt(value);
    if (isNaN(parsed)) {
        throw new Error("Невалидное значение");
    }
    return parsed;
}

function validateCount(value) {
    try {
        return parseCount(value);
    } catch (e) {
        return new Error("Невалидное значение");
    }
}
