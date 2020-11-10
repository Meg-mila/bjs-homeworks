"use strict"

// задача 1
function getSolutions(a, b, c) {
    const d = (Math.pow(b, 2) - 4 * a * c);
    if (d < 0) {
        return {
            D: d,
            roots: []
        };
    } else if (d === 0) {
        const x = -b / (2 * a);
        return {
            D: d,
            roots: [x]
        };
    } else if (d > 0) {
        const x1 = ((-b + Math.sqrt(d)) / (2 * a));
        const x2 = ((-b - Math.sqrt(d)) / (2 * a));
        console.log(x1, x2);
        return {
            D: d,
            roots: [x1, x2]
        };
    }
}

function showSolutionsMessage(a, b, c) {
    const result = getSolutions(a, b, c);
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

//задача 2
function getAverageMark(marks) {
    let sumMarks = 0;
    if (marks.length === 0) {
        return 0;
    }
    for (let i = 0; i < marks.length; i++) {
        sumMarks += marks[i];
    }
    let averageMark = sumMarks / marks.length;
    return averageMark;
}

function getAverageScore(data) {
    let result = {}
    result.average = 0;
    let sumSubject = 0;
    let subjectLength = 0;
    for (let subject in data) {
        let value = data[subject];
        result[subject] = getAverageMark(value);
        sumSubject += result[subject];
        subjectLength++;
        result.average = sumSubject / subjectLength;
    }
    if (data === 0) {
        return result.average = 0;
    }
    return result
}

console.log(getAverageScore({
    algebra: [2, 4, 5, 2, 3, 4],
        geometry: [2, 4, 5],
        russian: [3, 3, 4, 5],
        physics: [5, 5],
        music: [2, 2, 6],
        english: [4, 4, 3],
        poetry: [5, 3, 4],
        chemistry: [2],
        french: [4, 4],
}));
