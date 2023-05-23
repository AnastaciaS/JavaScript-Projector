console.log('start');

const promise1 = new Promise((resolve, reject) => {
    console.log(1)
    resolve(2)
})

promise1.then(res => {
    console.log(res)
})

console.log('end');

/*1. Цей код використовує Promises. 
- Спочатку виконується оператор console.log('start') і з'являється рядок «start» у консолі.
- Далі створюється новий об’єкт Promise під назвою promise1. Цей Promise виконується зі значенням 2 шляхом виклику методу resolve(). 
- Під час створення Promise виконується console.log(1), який виводить у консоль число 1.
- Після вирішення Promise для нього викликається метод then(), а функція виконується асинхронно, коли Promise вирішується. 
- Функція зворотного виклику реєструє значення res (що є розв’язаним значенням Promise) на консоль, викликаючи console.log(res).
- У кінці спрацьовує оператор console.log('end'), який друкує рядок "end" у консолі.

Результат: 
start
1
end
2  
*/

Promise.resolve(1)
    .then((x) => x + 1)
    .then((x) => { throw new Error('My Error') })
    .catch(() => 1)
    .then((x) => x + 1)
    .then((x) => console.log(x))
    .catch(console.error)

/*2. Цей код використовує Promises.
- Оператор Promise.resolve(1) створює Promise, який виконується зі значенням 1.
- Перший метод then() викликається в Promise і приймає функцію (x) => x + 1. Ця функція приймає значення 1 та додає до нього 1, у результаті чого отримується значення 2. Метод then() повертає новий Promise, який вирішується з новим значенням 2.
- Другий метод then() викликається в новому Promise і приймає функцію (x) => { throw new Error('My Error') }. Ця функція створює новий об’єкт Error із повідомленням 'My Error'. Оскільки Promise відхилено через помилку функції, викликається наступний метод catch().
- Метод catch() використовує функцію, яка просто повертає значення 1. Оскільки попередній Promise було відхилено, метод catch() повертає новий Promise, який вирішується зі значенням 1.
- Третій метод then() викликається для нового Promise, який було вирішено в попередньому методі catch(). Цей метод then() приймає функцію (x) => x + 1 як аргумент. Функція приймає значення 1 та додає до нього 1, у результаті чого отримується значення 2. Метод then() повертає новий Promise, який вирішується зі значенням 2.
- Четвертий і останній метод then() викликається в Promise, який було повернуто з попереднього методу then(). Цей метод then() приймає функцію (x) => console.log(x). Функція видає розв’язане значення 2 у консоль, викликаючи console.log(x).

Результат: 
2
*/

const promise = new Promise(res => res(2));
promise.then(v => {
    console.log(v);
    return v * 2;
})
    .then(v => {
        console.log(v);
        return v * 2;
    })
    .finally(v => {
        console.log(v);
        return v * 2;
    })
    .then(v => {
        console.log(v);
    });

/*3. Під час виконання коду створюється новий об’єкт Promise під назвою promise, який виконується зі значенням 2 шляхом виклику методу res(2).
- Потім у Promise викликається перший метод then(), і він приймає функцію (v) => {console.log(v); і повертає v * 2;}. Ця функція приймає значення 2 та видає його у консоль, викликаючи console.log(v). Потім він повертає нове значення, яке є значенням нового Promise. Новий Promise дорівнює 4.
- Другий метод then() викликається в новому Promise і приймає функцію (v) => {console.log(v); і повертає v * 2;}. Ця функція приймає значення 4 та записує його у консоль, викликаючи console.log(v). Потім він повертає нове значення, яке є значенням нового Promise. Новий Promise дорівнює 8.
- Метод finally() викликається Promise і приймає функцію (v) => {console.log(v); повертає v * 2;}. Ця функція записує у консоль значення, яке дорівнює 8. Метод finally() не впливає на розв’язане значення ланцюжка Promise.
- Третій метод then() викликається в Promise і приймає функцію (v) => console.log(v). Ця функція видає значення 8 у консоль, викликаючи console.log(v).

Результат: 
2
4
8
*/