'use strict'
/*
less_3_task_1
С помощью цикла while вывести все простые числа в промежутке от 0 до 100.
 */

function primeNumb(bord=100){
    let numb = 1;
    loop: while (numb < bord) {
        numb ++;
        let spam = 2;
        while (spam < numb){
            if (numb % spam === 0) continue loop;
            else spam ++;
        }
        console.log(numb);
    }
}
primeNumb();
/*
less_3_task_2_3
2. С этого урока начинаем работать с функционалом интернет-магазина. Предположим, есть сущность корзины.
Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров.
3. Товары в корзине хранятся в массиве. Задачи:
a) Организовать такой массив для хранения товаров в корзине;
b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.
*/
 const basketProduct = [["pen", 3, 20.50], ["penсil", 10, 3.68], ["notebook", 100, 0.90], ["book", 3, 20.50]];
 function countBasketPrice(basket){
     let sumBasket = 0;
     for (const product of basket){
         sumBasket += product[1] * product[2];
     }
     return sumBasket;
 }
 console.log("Cумма товаров в корзине " + countBasketPrice(basketProduct))
 /*
 less_3_task_4
Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла. Выглядеть это должно так:
  */
for (let i = 0; i < 10; console.log(i++)){}
/*
Нарисовать пирамиду с 20 рядами с помощью console.log, как показано на рисунке:
 */
for (let i = 1; i < 20; i++ ){
    console.log(i)
};


