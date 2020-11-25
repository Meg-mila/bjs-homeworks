'use strict'

class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.timerId = null;
    }

    addClock(time, callback, id) {
        if (id === undefined) {
            throw new Error("Невозможно идентифицировать будильник. Параметр id не передан.");
        }
        if (this.alarmCollection.some(item => item.id === id)) {
            console.error("Будильник с таким id уже существует");
        } else {
            this.alarmCollection.push({
                id,
                time,
                callback
            })
        }
    }

    removeClock(id) {
        const index = this.alarmCollection.findIndex(item => item.id === id);
        if (index === -1) {
            return false
        } else {
            this.alarmCollection.splice(index, 1);
            return true;
        }
    }

    getCurrentFormattedTime() {
        return new Date().toTimeString().slice(0, 5);
    }

    start() {
        const checkTime = this.getCurrentFormattedTime();

        function checkClock(call) {
            const newTime = checkTime;
            if (newTime === call.time) {
                call.callback();
            }
        }

        if (this.timerId === null) {
            this.timerId = setInterval(() => {
                this.alarmCollection.forEach(item => checkClock(item, this.getCurrentFormattedTime()))
            }, 3000);
        }
    }

    stop() {
        if (this.timerId) {
            clearInterval(this.timerId);
            this.timerId = null;
        }
    }

    printAlarms() {
        console.log("Печать всех будильников в количестве: " + this.alarmCollection.length);
        this.alarmCollection.forEach(item => console.log(`Будильник ${item.id} заведен на ${item.time}`));
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
}

function testCase() {
    let newClock = new AlarmClock();
    newClock.addClock("08:00", () => console.log("Пора вставать!"), 1);
    newClock.addClock("08:01", () => {
        console.log("Хватит спать! Вставай!"); newClock.removeClock(2)
    }, 2);
    newClock.addClock("08:02", () => console.log("Иди умываться"));
    newClock.addClock("08:03", () => {
        console.log("Вставай! Проспишь!"); newClock.clearAlarms(); newClock.printAlarms()
    }, 3);
    newClock.addClock("08:05", () => console.log("Вставай! Проспишь!"), 1);

    newClock.printAlarms();
    newClock.start();
}

testCase();
