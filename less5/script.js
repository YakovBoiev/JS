'use strict'
function boardChess() {
    const chess = document.getElementById('chess');
    let spam = ""
    for (let i = 0; i < 10; i++) {        //  создаю поле 10 х 10
        for (let j = 0; j < 10; j++) {
            spam += '<div class="cell"></div>';
        }
        spam += '<br/>';
    }
    chess.innerHTML = spam;
    const cell = Array.from(document.getElementsByClassName('cell')); //   задаю стиль всем клеткам
    for (let i = 0; i < cell.length; i++) {
        cell[i].style.height = '50px';
        cell[i].style.width = '50px';
        cell[i].style.display = 'inline-block';
        cell[i].style.border = "1px solid white"
        cell[i].style.verticalAlign = "bottom"
        cell[i].style.textAlign = "center"
    }
    for (let i = 10; i < cell.length - 10; i++) { // раскрашиваю поле без первой и последней строки
        if (i % 10 !== 0 && i % 10 !== 9) {           // без первого и последнего столбца
            cell[i].style.border = "1px solid black"
            if (Math.floor(i / 10) % 2 === 0) {  // четные строки
                if (i % 2 !== 0) {
                    cell[i].style.background = 'black';
                }
            } else if (i % 2 === 0) {             // не четные строки
                cell[i].style.background = 'black';
            }
        } else {                                          // в первом и последнем столбце нумерация строк
            cell[i].innerHTML = Math.floor(i / 10);
        }
    }
    let abc = ["", 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', ""] // обозначение столбцов
    for (let i = 0; i < 10; i++) {
        cell[i].innerHTML = abc[i]
    }
    for (let i = 90; i < 100; i++) {
        cell[i].innerHTML = abc[i - 90]
    }
}
boardChess()

const basket = {
    products: [
        {catalogName: "Computer", name: "Asus", model: "M509", price: 500},
        {catalogName: "Tablet", name: "Samsung", model: "S6",  price: 300},
        {catalogName: "Phone", name: "Apple",model: "iPhone 12", price: 1000},
        {catalogName: "Phone", name: "Apple",model: "iPhone 12", price: 1000}

    ],
    addProductBasket(prod){
        this.products.push(prod)
    },
    delProductBasket(prod){
        this.products.pop(prod)
    },
    sumProductBasket(){
        let totalSum = this.products.reduce(function (total, product){
            return total + product.price
        }, 0)
        return totalSum;
    }
}
const elemBasket = document.getElementById('basket')
let output = "Корзина пуста"
if (basket.products.length > 0){
    
    output = `В корзине ${basket.products.length} товаров на сумму ${basket.sumProductBasket()} рублей`
}
elemBasket.innerHTML = output;