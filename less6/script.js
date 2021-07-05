const cartProd = {                                                                             // div блок отображения товаров
    visual(prod) {
        let output = `<div class="prod">                                                  
                    <div>Наименование ${prod.name} ${prod.model}</div>                    
                    <div>Цена ${prod.price}</div>`                                            // одинаковая часть и для каталога и для корзины
        if (prod.quantiy){                                                                    // добавляем для корзины
            output +=  `<div>Количество </b>${prod.quantiy}</div>
                        <div>Стоимость ${prod.quantiy  * prod.price}</div>`
        }
        else {                                                                                 // добавляем для каталога кнопку
            output += `<button onclick="catalog.addProductBasket(${prod.id})"> Купить </button>` //
        }
        output += `</div>`
        return output
    }
}

const catalog =  {                                                        // id уникален
    products: [
        {id: "1", name: "Asus", model: "M509", price: 500},
        {id: "2", name: "Samsung", model: "S6", price: 300},
        {id: "3", name: "Apple", model: "iPhone 12", price: 1000},

    ],
    catalogDivBlock: null,
    productDivBlock: cartProd,

    init() {
        this.catalogDivBlock = document.querySelector('.catalog')
        this.catalogDivBlock.innerHTML = '<div>Каталог</div>'
        for (let i = 0; i < this.products.length; i++){
            this.catalogDivBlock.insertAdjacentHTML("beforeend", this.productDivBlock.visual(this.products[i]))
        }
    },

    addProductBasket(id){                                        // добавляем в корзину товар по уникальному id
        for (let i =0; i < this.products.length; i++){
            if (this.products[i].id == id){
                basket.addProduct(JSON.stringify(this.products[i]))
                break;
            }
        }
    }
}

const basket =  {
    products: [],
    basketDivBlock: null,
    productDivBlock: cartProd,
    idArray: [],                                             // массив id, индексы совпадают с массивом products

    init() {
        this.basketDivBlock = document.querySelector('.basket');
        this.basketDivBlock.innerHTML = '<div>Корзина</div>';
        if (this.products.length > 0) {
            for (let i = 0; i < this.products.length; i++) {
                this.basketDivBlock.insertAdjacentHTML("beforeend", this.productDivBlock.visual(this.products[i]))
           }
            this.basketDivBlock.insertAdjacentHTML("beforeend",
                `В корзине ${basket.products.length} позиций на сумму ${basket.sumProductBasket()} рублей`)
        }
        else {this.basketDivBlock.insertAdjacentHTML("beforeend", "Корзина пуста" )};
    },

    addProduct(product) {
        let spam =  Object.assign({quantiy: 1}, JSON.parse(product)); // создаю объект и добавляю свойство - количество
        let index = this.idArray.indexOf(spam.id);                          // получаю индекс id объекта в массиве значений id
        if (index === -1){                                                  // если id нет в массиве значений id
            this.idArray.push(spam.id);                                     // добавляю id в масссив значений id
            this.products.push(spam);                                       // добавляю объект в массив товаров
        }
        else {                                                              // если id ecть в массиве значений id
            this.products[index].quantiy ++;                                // увеличиваю количество данного товара на еденицу
        }
        basket.init()

    },
    sumProductBasket() {
        let totalSum = this.products.reduce(function (total, product) {
            return total + product.price * product.quantiy
        }, 0)
        return totalSum;
    }

}

catalog.init();
basket.init()
