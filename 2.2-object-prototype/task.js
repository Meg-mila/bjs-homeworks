"use strict"

function isPalindrome(str) {
    str  = this.toLowerCase().replace(/\s/g,'');
    return str === str.split('').reverse().join('');
}
String.prototype.isPalindrome = isPalindrome;


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

function checkBirthday(userBirthday) {
    // код для задачи №3 писать здесь
    // return verdict
    let today = new Date();
    console.log(today);
    let now = today.getTime();
    console.log(now);
    let userDate = new Date(userBirthday);
    console.log(userDate);
    let birthday = userDate.getTime();
    console.log(birthday);
    let diff = now - birthday;
    console.log(diff);
    let age = diff / (24 * 3600 * 1000 * 365.2425);
    console.log(age);
    if (age > 18) {
        return true
    } else if (age < 18) {
        return false
    }
}
