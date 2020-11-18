'use strict'

//задача 1
class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    fix() {
        this.state = this.state * 1.5
    }

    set state(value) {
        if (value < 0) {
            this._state = 0;
        } else if (value > 100) {
            this._state = 100;
        } else {
            this._state = value;
        }
    }

    get state() {
        return this._state;
    }
}

const sherlock = new PrintEditionItem("Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе", 2019, 1008);
console.log(sherlock.releaseDate);
console.log(sherlock.state);
sherlock.fix();
console.log(sherlock.state);

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = 'magazine';
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = 'book';
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = 'novel';
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = 'fantastic';
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = 'detective';
    }
}

const picknick = new FantasticBook("Аркадий и Борис Стругацкие", "Пикник на обочине", 1972, 168);
const pyshkin = new NovelBook('А.С.Пушкин', 'Руслан и Людмила', 1988, 150);
console.log(picknick.author);
picknick.state = 10;
console.log(picknick.state);
picknick.fix();
console.log(picknick.state);
console.log(pyshkin.author);
pyshkin.state = 20;
console.log(pyshkin.state);
pyshkin.fix();
console.log(pyshkin.state);

//задача 2
class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }
    }

    findBookBy(type, value) {
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i][type] === value) {
                return this.books[i];
            }
        }
        return null;
    }

    giveBookByName(bookName) {
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i].name === bookName) {
                return this.books.splice(i, 1);
            }
        }
        return null;
    }
}

const library = new Library("Библиотека имени Ленина");

library.addBook(new DetectiveBook("Артур Конан Дойл", "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе", 2019, 1008));
library.addBook(new FantasticBook("Аркадий и Борис Стругацкие", "Пикник на обочине", 1972, 168));
library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
library.addBook(new Magazine("Мурзилка", 1924, 60));

console.log(library.findBookBy("name", "Властелин колец"));
console.log(library.findBookBy("releaseDate", 1924).name);

console.log("Количество книг до выдачи: " + library.books.length);
library.giveBookByName("Машина времени");
console.log("Количество книг после выдачи: " + library.books.length);


//задача 3
class StudentLog {
    constructor(name) {
        this.name = name;
        this.marks = {};
    }

    getName(name) {
        return this.name;
    }

    addGrade(grade, subject) {
        if (this.marks[subject] === undefined) {
            this.marks[subject] = [];
        }
        if (grade > 0 && grade < 6) {
            this.marks[subject].push(grade);
        } else {
            console.log(`Вы пытались поставить оценку ${grade} по предмету ${subject}. Допускаются только числа от 1 до 5.`);
        }
        return this.marks[subject].length;
    }

    getAverageBySubject(subject) {
        if (this.marks[subject] === undefined) {
            return 0;
        }
        let sumMarks = 0;
        let average = 0;
        for (let i = 0; i < this.marks[subject].length; i++) {
            sumMarks += this.marks[subject][i];
            average = sumMarks / this.marks[subject].length;
        }
        return average;
    }

    getTotalAverage() {
        let sumSubject = 0;
        let subjectLength = 0;
        let average = 0;
        for (let subject in this.marks) {
            sumSubject += this.getAverageBySubject(subject);
            subjectLength++;
            average = sumSubject / subjectLength;
        }
        if (this.marks === 0) {
            return 0;
        }
        return average;
    }
}

console.log('//');
const log = new StudentLog('Олег Никифоров');
console.log(log.getName());
console.log(log.addGrade(3, 'algebra'));
console.log(log.addGrade('отлично!', 'math'));
console.log(log.addGrade(4, 'algebra'));
console.log(log.addGrade(5, 'geometry'));
console.log(log.addGrade(25, 'geometry'));

console.log('//');
const log1 = new StudentLog('Олег Никифоров');

log1.addGrade(2, 'algebra');
log1.addGrade(4, 'algebra');
log1.addGrade(5, 'geometry');
log1.addGrade(4, 'geometry');

console.log(log1.getAverageBySubject('geometry'));
console.log(log1.getAverageBySubject('algebra'));
console.log(log1.getAverageBySubject('math'));


console.log('//');
const log2 = new StudentLog('Олег Никифоров');

log2.addGrade(2, 'algebra');
log2.addGrade(4, 'algebra');
log2.addGrade(5, 'geometry');
log2.addGrade(4, 'geometry');

console.log(log2.getTotalAverage())
