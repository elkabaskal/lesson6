"use strict"

var i = 0;
const card = {
    goods: [{
        id: 1,
        typeofgoods: 'for_man',
        quantity: '0',
        price: '200',
    }, {
        id: 2,
        typeofgoods: 'for_kids',
        quantity: '0',
        price: '250',
    }, {
        id: 3,
        typeofgoods: 'for_woman',
        quantity: '0',
        price: '150',
    }, {
        id: 4,
        typeofgoods: 'for_pet',
        quantity: '0',
        price: '100',
    }, ],


    /*     filCard() {
            let sum = 0;
            let amountAll = 0;
            for (i; i < card.goods.length; i++) {
                var amount = +prompt('Введите необходимое количество товара ' + card.goods[i].typeofgoods);
                if (isNaN(amount)) {
                    alert('Введено неверное значение');
                    //this.filCard()
                }
                card.goods[i].quantity = amount;
                let result = amount * card.goods[i].price;
                sum += result;
                amountAll += amount;
                if (amount !== 0) {
                    this.initCardOfGoods();
                }

            }
            if (sum == 0) {
                document.write('Корзина пуста');
            } else {
                document.write('В корзине ' + amountAll + ' товаров на сумму ' + sum + ' руб.');
            }

        }, */

    initCardOfGoods() {

        const basketBlock = document.getElementById('basket');
        basketBlock.insertAdjacentHTML("afterbegin", '<button class = "clear">Очистить корзину</button>');

        for (i; i < card.goods.length; i++) {
            const cardGoods = document.createElement('div');
            basketBlock.appendChild(cardGoods);
            cardGoods.className = 'good';
            cardGoods.insertAdjacentHTML("beforeend", '<p class ="cart__text">Тип товара: ' + card.goods[i].typeofgoods + '</p>');
            cardGoods.insertAdjacentHTML("beforeend", '<p class ="cart__text">Количество выбраного товара в корзине: ' + card.goods[i].quantity + '</p>');
            cardGoods.insertAdjacentHTML("beforeend", '<p class ="cart__text">Цена товара: ' + card.goods[i].price + '</p>');
            cardGoods.insertAdjacentHTML("beforeend", '<p class ="cart__text">Стоимость выбранного товара: ' + card.goods[i].price * card.goods[i].quantity + '</p>');
            cardGoods.insertAdjacentHTML("beforeend", '<button class = "btn">Добавить в корзину</button>');
        }
        basketBlock.insertAdjacentHTML("beforeend", '<p class = "cart__empty">Корзина пуста</p>');

        /*  let sum = 0;
         if (sum == 0) {
             document.write('Корзина пуста'); 
         }*/
    },

}

card.initCardOfGoods()