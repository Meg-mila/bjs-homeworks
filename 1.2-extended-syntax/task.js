function getResult(a,b,c){
    "use strict"
    let D = (Math.pow(b,2) - 4 * a * c); 
    let x = [];
    if (D < 0) {
        return x;
    } else if (D === 0) {
        x = (-b / 2 * a);
        return [x];
    } else if (D > 0) {
        let x1 = ((-b + Math.sqrt(D)) / 2 * a);
        let x2 = ((-b - Math.sqrt(D)) / 2 * a);
        return [x1, x2];
    }
}

function getAverageMark(marks){
    // код для задачи №2 писать здесь
    // return averageMark;
}

function askDrink(name,dateOfBirthday){
    // код для задачи №3 писать здесь
    // return result;
}