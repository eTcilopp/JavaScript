/* ЗАДАЧА 2
С помощью цикла for написать алгоритм для вывода чисел
от 0 до 10 включительно, чтобы результат выглядел так:
0 – это ноль
1 – нечетное число
2 – четное число
3 – нечетное число
…
10 – четное число
*/

"use strict";

document.write(`Решение задачи 2 <br>`);

function checkOddEven(num) {
    if (num == 0) {
        return "это ноль";
    } else if (num % 2) {
        return "нечетное число";
    } else {
        return "четное число";
    }
}

for (let i = 0; i <= 10; i++) {
    document.write(`${i} - ${checkOddEven(i)}<br>`);
}

// ЗАДАЧА 3

const post = {
    author: "John", //вывести этот текст
    postId: 23,
    comments: [{
            userId: 10,
            userName: "Alex",
            text: "lorem ipsum",
            rating: {
                likes: 10,
                dislikes: 2 //вывести это число
            }
        },
        {
            userId: 5, //вывести это число
            userName: "Jane",
            text: "lorem ipsum 2", //вывести этот текст
            rating: {
                likes: 3,
                dislikes: 1
            }
        },
    ]
}

document.write(`<br>Решение задачи 3<br>Вывод текста из объекта post<br>`);
document.write(post.author);
document.write(`<br>`);
document.write(post.comments[0].rating.dislikes);
document.write(`<br>`);
document.write(post.comments[1].userId);
document.write(`<br>`);
document.write(post.comments[1].text);

/* ЗАДАЧА 4
Перед вами находится массив с продуктами, сегодня распродажа
и вам нужно на каждый товар применить скидку 15%,
можете использовать метод forEach
*/

document.write(`<br><br>Решение задачи 4<br>`);

const products = [{
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
];

const discount = 15; //задается величина скидки в %

products.forEach(product => {
    product.price = product.price * (100 - discount) / 100;
    document.write(`ID товара ${product.id}, цена со скидкой ${discount}% ${product.price} руб.<br>`);
});

/* ЗАДАЧА 5
5 Перед вами находится массив с продуктами в интернет-магазине.
Вам нужно:
1 Получить все товары, у которых есть фотографии.
2 Отсортируйте товары по цене (от низкой цены к высокой)
*/

const products5 = [{  // изменил имя константы, чтобы все задачи разместить в одном файле
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ]
    },
    {
        id: 5,
        price: 499,
        photos: []
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg"
        ]
    },
    {
        id: 8,
        price: 78,
    },
];

document.write(`<br>Решение задачи 5<br>`);
document.write(`ID товаров с фотографиями:<br>`);


let productsWithPics = products5.filter(product => product.photos !== undefined && isNaN(product.photos));

productsWithPics.forEach(product => {
    document.write('${product.id}<br>');
});

document.write(`<br>Сортировка цены товара по возрастанию:<br>`)

products5.sort(function(a,b){
    if (a.price > b.price) {
        return 1;
    }
    if (a.price < b.price ) {
        return -1;
    }
    return 0;
});

products5.forEach(product => document.write(`ID товара: ${product.id}; Цена товара ${product.price} руб.<br>`))


/*
6 (По желанию, т.к. такая особенность практически не используется) Вывести с помощью цикла for числа от 0 до 9,
НЕ используя тело цикла. То есть выглядеть должно примерно так:
for(…){/ здесь пусто /}
Помните, что в первом, втором и третьем раздела цикла можно не только писать условия, или увеличивать счетчик
например на 1, допустимы любые выражения, например вызовы функций.
*/

document.write(`<br><br>Решение задачи 6<br>`);

function magic(num){
    document.write(`${num}<br>`);
    num++;
    return num;
}

for (let i = 0; i < 10; i=magic(i)) {};

/*
Нарисовать горку с помощью console.log (используя цикл for), как показано на рисунке,
только у вашей горки должно быть 20 рядов, а не 5:
*/

document.write(`<br><br>Решение задачи 7<br>`);

function getStars(num) {
    return (num == 1) ? '*': ('*' + getStars(num - 1));
    }


for (let i = 1; i<= 20; i++) {
    console.log(`${getStars(i)}`)
}
