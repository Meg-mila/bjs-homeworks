"use strict"
function calculateTotalMortgage(percent, contribution, amount, date) {

    if (isNaN(parseInt(percent))) {
        return `Параметр Процентная ставка содержит неправильное значение ${percent}`;
    }
    if (isNaN(parseInt(contribution))) {
        return `Параметр Первоначальный взнос содержит неправильное значение ${contribution}`;
    }
    if (isNaN(parseInt(amount))) {
        return `Параметр Сумма кредита содержит неправильное значение ${amount}`;
    } 
    
    let amountReturn = amount - contribution; // тело кредита

    let month = date.getMonth() - new Date().getMonth();
    if (date.getMonth() < new Date().getMonth()) {
        month = new Date().getMonth() -date.getMonth();
    }

    let creditTerm = ((date.getFullYear() - new Date().getFullYear()) * 12) + month; // кол-во месяцев
    let P = percent / 1200; // 1/12 процентной ставки

    let amountMonth = amountReturn * (P + P / ((Math.pow((1 + P), creditTerm) - 1))); // ежемесячная оплата
    let totalAmount = amountMonth * creditTerm;
    console.log(totalAmount.toFixed(2));
    return totalAmount.toFixed(2);
}

function getGreeting(name) {
    if (name === "") {
        name = "Аноним";
    }
    let greeting = `Привет, мир! Меня зовут ${name}.`;
    console.log(greeting);
    return greeting;
}