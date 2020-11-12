"use strict"
//задача 1
function isPalindrome(str) {
    str  = this.toLowerCase().replace(/\s/g,'');
    return str === str.split('').reverse().join('');
}
String.prototype.isPalindrome = isPalindrome;

//задача 2
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
//задача 3
function checkBirthday(userBirthday) {
    let today = new Date();
    let now = today.getTime();
    let userDate = new Date(userBirthday);
    let birthday = userDate.getTime();
    let diff = now - birthday;
    let age = diff / (24 * 3600 * 1000 * 365.2425);
    if (age > 18) {
        return true
    } else if (age < 18) {
        return false
    }
}
