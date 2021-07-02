'use strict'
const cartProd = {
    visual(prod) {
        return `<div class="prod">
                    <div><b>Наименование</b>: ${prod.name} + ${prod.model}</div>
                    <div><b>Цена за шт.</b>: ${prod.price}</div>
                 </div>`;
}
}

const catalog =  {
    products: [
        {catalogName: "Computer", name: "Asus", model: "M509", price: 500},
        {catalogName: "Tablet", name: "Samsung", model: "S6", price: 300},
        {catalogName: "Phone", name: "Apple", model: "iPhone 12", price: 1000},
        {catalogName: "Phone", name: "Apple", model: "iPhone 12", price: 1000}

    ],

    init() {

    }
}