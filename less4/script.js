'use strict'
/*less_4_task_1
Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999, мы должны получить на выходе объект,
в котором в соответствующих свойствах описаны единицы, десятки и сотни. Например, для числа 245 мы должны получить
следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}.
Если число превышает 999, необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.
 */
function getNumberRanks (number){
    const obj = {
        units: 0,
        tens: 0,
        hundrens: 0,
        changeUnits(unit) {
            this.units = unit;
        },
        changeTens(ten) {
            this.tens = ten;
        },
        changeHundrens(hundren) {
            this.hundrens = hundren;
        }
    };
    if (number < 0 || number > 999){
        console.log ('Число не входит в диапазон от 0 до 999');
        return {};
    }
    obj.changeUnits(number % 10);
    number = parseInt(number / 10);
    obj.changeTens(number % 10);
    number = parseInt(number / 10);
    obj.changeHundrens(number % 10)
    return obj;
}

console.log(getNumberRanks(999))
/* less_4_task_2_3
Продолжить работу с интернет-магазином:
2.1. В прошлом домашнем задании вы реализовали корзину на базе массивов. Какими объектами можно заменить их элементы?
2.2. Реализуйте такие объекты.
2.3. Перенести функционал подсчета корзины на объектно-ориентированную базу.
 */
const product1 = {
    catalogName: "Computer",
    name: "Asus",
    model: "M509",
    price: 500
}
const product2 = {
    catalogName: "Tablet", //
    name: "Samsung",
    model: "S6",
    price: 300
}
const product3 = {
    catalogName: "Phone", //
    name: "Apple",
    model: "iPhone 12",
    price: 1000
}

const basket = {
    products: [],
    addProductBasket(prod){
        this.products.push(prod)
    },
    delProductBasket(prod){
        this.products.pop(prod)
    },
    sumProductBasket(){
        let totalSum = this.products.reduce(function (acc, curVal){
            return acc + curVal.price
        }, 0)
        return totalSum;
    }
}

basket.addProductBasket(product1);
basket.addProductBasket(product2);
basket.addProductBasket(product3);
console.log(basket)
console.log('Сумма товаров в корзине ' + basket.sumProductBasket())
basket.delProductBasket(product3);
console.log(basket)
console.log('Сумма товаров в корзине ' + basket.sumProductBasket())