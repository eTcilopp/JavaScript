/*
1 Написать функцию, преобразующую число в объект. Передавая на вход число в диапазоне [0, 999],
мы должны получить на выходе объект, в котором в соответствующих свойствах описаны разряды числа:
- единицы (в свойстве units)
- десятки (в свойстве tens)
- сотни (в свойстве hundereds)
*/

"use strict"

function convertNumToObj(num) {
    let Object = {};

    if (isNaN(num)) {
        console.log('Не число');
        return Object;
    };


    if (!Number.isInteger(num)) {
        console.log('Не целое число');
        return Object;
    };


    if (num < 0 || num > 999) {
        console.log('Число вне заданного диапазона');
        return Object;
    };

    Object.hundreds = parseInt(num / 100);
    Object.tens = parseInt(num % 100 / 10);
    Object.units = parseInt(num % 10);

    return Object

};

console.log(convertNumToObj(535)); //{hundreds: 5, tens: 3, units: 5}

/*
Сделайте в стиле es5, а затем в стиле es6 (по аналогии из урока), конструктор Product, который
принимает параметры name и price, сохраните их как свойства объекта. Также объекты типа Product
должны иметь метод make25PercentDiscount, который будет уменьшать цену в объекте на 25%.
*/

// ES5

function Product(name, price) {
    this.name = name;
    this.price = price;
    this.make25PercentDiscount = function () {
        this.price *= 0.75;
    }
}


const product = new Product('Toy', 50);

console.log(product.price) // 50
product.make25PercentDiscount();
console.log(product.price) //37.5

//ES6

class Product2 {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    make25PercentDiscoun() {
        this.price *= 0.75;
    }
}

const product1 = new Product2('Tool', 60);

console.log(product1.price); //60
product1.make25PercentDiscoun();
console.log(product1.price); //45


/* 1.2 Сделайте в стиле es5, а затем в стиле es6 (по аналогии из урока),
    а) конструктор Post, который принимает параметры author, text, date и сохраняет их как свойства
    объекта. Объекты типа Post должны иметь метод edit, который будет принимать текст и записывать
    его в свойство text объекта.
*/

//es5

function Post(author, text, date) {
    this.author = author;
    this.text = text;
    this.date = date;
    this.edit = function (text) {
        this.text += ' ' + text;
    }
}



const post_es5 = new Post('Trump', 'Covfefe', '25-May-2020');

console.log(`${post_es5.author} on ${post_es5.date} says ${post_es5.text}`); // Trump on 25-May-2020 says Covfefe

post_es5.edit('move on');
console.log(`${post_es5.author} on ${post_es5.date} says ${post_es5.text}`); // Trump on 25-May-2020 says Covfefe move on

//es6

class Post2 {
    constructor(author, text, date) {
        this.author = author;
        this.text = text;
        this.date = date;
    }
    edit(text) {
        this.text += ' ' + text;
    }
}

const post_es6 = new Post2('Sunders', 'Free money', '26-May-2020');

console.log(`${post_es6.author} on ${post_es6.date} says ${post_es6.text}`); //Sunders on 26-May-2020 says Free money

post_es6.edit('for all!');
console.log(`${post_es6.author} on ${post_es6.date} says ${post_es6.text}`); //Sunders on 26-May-2020 says Free money for all!


/*
б) конструктор AttachedPost, который принимает параметры author, text, date.
Проинициализируйте эти свойства с помощью конструктора Post, чтобы не дублировать код. Также
в конструкторе AttachedPost должно создаваться свойство highlighted со значением false.
Унаследуйте в объектах типа AttachedPost методы из Post.
Объекты типа AttachedPost должны иметь метод makeTextHighlighted, который будет назначать
свойству highlighted значение true.
*/

//es5 ************************

function AttachedPost (author, text, date, highlighted=false){
    Post.call(this, author, text, date);
    this.highlighted = highlighted;
}

AttachedPost.prototype.makeTextHighlighted = function () {
    this.highlighted = true;
}

AttachedPost.prototype.edit = function (text) {
    Post.call(this.edit);
}

const attachedPost1 = new AttachedPost('Bill Gates', 'O-la-la!', '20-May-2020');
console.log(`${attachedPost1.author}, ${attachedPost1.text}, ${attachedPost1.date}, ${attachedPost1.highlighted}`);
//Bill Gates, O-la-la!, 20-May-2020, false

attachedPost1.edit('??'); // унаследованный метод
console.log(`${attachedPost1.author}, ${attachedPost1.text}, ${attachedPost1.date}, ${attachedPost1.highlighted}`);

attachedPost1.makeTextHighlighted();

console.log(`${attachedPost1.author}, ${attachedPost1.text}, ${attachedPost1.date}, ${attachedPost1.highlighted}`);
//Bill Gates, O-la-la!, 20-May-2020, true



//es6 ***********************

class AttachedPost2 extends Post2 {
    constructor (author, text, date, highlighted=false) {
        super (author, text, date);
        this.highlighted = highlighted;
    }
    edit(text){
        super.edit(text);
    }
    makeTextHighlighted() {
        this.highlighted = true;
    }
}

const attachedPost2 = new AttachedPost2('Steve Jobs', 'Never again', '20-May-2019');

console.log(`${attachedPost2.author}, ${attachedPost2.text}, ${attachedPost2.date}, ${attachedPost2.highlighted}`);
// Steve Jobs, Never again, 20-May-2019, false


attachedPost2.edit('!!!');  // метод edit унаследован из  Post2
console.log(`${attachedPost2.author}, ${attachedPost2.text}, ${attachedPost2.date}, ${attachedPost2.highlighted}`);
//Steve Jobs, Never again !!!, 20-May-2019, false

attachedPost2.makeTextHighlighted();
console.log(`${attachedPost2.author}, ${attachedPost2.text}, ${attachedPost2.date}, ${attachedPost2.highlighted}`);
//Steve Jobs, Never again !!!, 20-May-2019, true 


