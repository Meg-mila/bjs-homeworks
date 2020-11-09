"use strict"
 // задача 1
function getSolutions(a, b, c) {
    const D = (Math.pow(b, 2) - 4 * a * c);
    if (D < 0) {
        return {
            D: D,
            roots: []
        };
    } else if (D === 0) {
        let x = -b / (2 * a);
        return {
            D: D,
            roots: [x]
        };
    } else if (D > 0) {
        let x1 = ((-b + Math.sqrt(D)) / (2 * a));
        let x2 = ((-b - Math.sqrt(D)) / (2 * a));
        console.log(x1, x2);
        return {
            D: D,
            roots: [x1, x2]
        };
    }
}
function showSolutionsMessage( a, b, c ) {
    let result = getSolutions( a, b, c );
    console.log(`Вычисляем корни квадратного уравнения ${a}x^2 + ${b}x + ${c}`);
    console.log(`Значение дискриминанта: ${result.D}`);
    if (result.D < 0) {
        return "Уравнение не имеет вещественных корней";
    } else if (result.D === 0) {
        return `Уравнение имеет один корень X₁ = ${result.roots}`;
    } else {
        return `Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`;
    }
}
