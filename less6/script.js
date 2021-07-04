
const cartProd = {
    visual(prod) {
        return `<div class="prod">
                    <div><b>Наименование </b>${prod.name} ${prod.model}</div>
                    <div><b>Цена </b>${prod.price}</div>
                    </div>`;
}
}

const catalog =  {
    products: [
        {id: "1", name: "Asus", model: "M509", price: 500},
        {id: "2", name: "Samsung", model: "S6", price: 300},
        {id: "3", name: "Apple", model: "iPhone 12", price: 1000},

    ],
    catalogDivBlock: null,
    productDivBlock: cartProd,
    button: null,

    init() {
        this.catalogDivBlock = document.querySelector('.catalog')
        for (let i = 0; i < this.products.length; i++){
            let spam = this.products[i];
            this.catalogDivBlock.insertAdjacentHTML("beforeend", this.productDivBlock.visual(spam)
                + `<button onclick="catalog.addProductBasket(${i})">Купить</button>`);
        }
    },
    addProductBasket(i){
        basket.addProduct(JSON.stringify(this.products[i]))
    }

}

const basket =  {
    products: [],
    basketDivBlock: null,
    productDivBlock: cartProd,
    idArray: [],

    init() {
        this.basketDivBlock = document.querySelector('.basket');
        this.basketDivBlock.innerHTML = '';
        if (this.products.length > 0) {
            for (let i = 0; i < this.products.length; i++) {
                this.basketDivBlock.insertAdjacentHTML("beforeend",
                    this.productDivBlock.visual(this.products[i]))
            }
            this.basketDivBlock.insertAdjacentHTML("beforeend",
                `В корзине ${basket.products.length} товаров на сумму ${basket.sumProductBasket()} рублей`)
        }

        else {this.basketDivBlock.insertAdjacentHTML("beforeend", "Корзина пуста" )}
    },
    addProduct(product) {
        let spam =  Object.assign({quantiy: 1}, JSON.parse(product)); // создаю объект и добавляю свойство - количество
        let index = this.idArray.indexOf(spam.id); // получаю индекс объекта в массиве значений id
        console.log(index)
        if (index === -1){                        // если id нет в массиве значений id
            this.idArray.push(spam.id);           // добавляю id в масссив значений id
            console.log(this.idArray)
            this.products.push(spam);             // добавляю объект в массив товаров
        }
        else {                                    // если id ecть в массиве значений id
            this.products[index].quantiy ++;      // увеличиваю количество товара на еденицу
        }




        console.log(this.products)
        basket.init()

    },
    sumProductBasket() {
        let totalSum = this.products.reduce(function (total, product) {
            return total + product.price
        }, 0)
        return totalSum;
    }

}


catalog.init()
basket.init()

