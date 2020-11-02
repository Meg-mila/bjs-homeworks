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
    "use strict"
    let sumMarks = 0;
    
    if (marks.length === 0) {
        return 0;
    }
    
    if (marks.length > 5) {
        console.log('Количество оценок больше 5');
        marks.splice(5);
    }
    for (let i = 0; i < marks.length; i++){
        sumMarks += marks[i];
    }
    let averageMark = sumMarks / marks.length;
    return Math.round(averageMark);
}

function askDrink(name,dateOfBirthday){
    "use strict"
    let userYear = dateOfBirthday.getFullYear();
    let year = new Date().getFullYear();
    let age = year - userYear;
    let result = "";
    if (age > 18) {
        result = `Не желаете ли олд-фэшн, ${name}?`;
    } else {
        result =`Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
    }
    return result;
}