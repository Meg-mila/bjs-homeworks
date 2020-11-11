"use strict"
//String.prototype.isPalindrome - для задачи №1
function isPalindrome() {

}



function getAverageMark(marks) {
    let average = 0;
    if (marks.length === 0) {
        return 0;
    }
    let sumMarks = 0;
    for (let i = 0; i < marks.length; i++) {
        sumMarks += marks[i];
    }
    average = sumMarks / marks.length;
    let roundAverage = Math.round(average);
    return  roundAverage;
}

function checkBirthday(birthday) {
    // код для задачи №3 писать здесь
    // return verdict
}
