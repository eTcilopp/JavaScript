// Задача 3. Сделайте модальное (появляющееся и исчезающее) окно

// 1. получить объект модального окна с классом .wrap
let wrap = document.querySelector('.wrap');

// 2. получить тег span, используемый для закрытия окна
let span = document.querySelector('span');

// 3. получить кнопку, используемую для показа модального окна
let button = document.querySelector('button');
console.log(button);

// 4. назначить обработку клика на кнопку показа модального окна
// когда функция обработчик срабатывает она должна у модального
// окна удалять класс hidden

button.addEventListener('click',function(){
    wrap.className = 'wrap';
})


// 5. назначить обработку клика на тег span, при клике
// в обработчике модальному окну должен быть добавлен
// класс hidden

span.addEventListener('click', function(){
    wrap.className = 'wrap hidden';
})