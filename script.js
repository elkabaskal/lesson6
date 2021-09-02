"use strict"


const catalog = {
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



    initCatalog() {

        const catalogItem = document.getElementById('products');
        var id = 0;
        var total = 0;
        for (var i = 0; i < catalog.goods.length; i++) {
            const goods = document.createElement('div');
            catalogItem.appendChild(goods);
            goods.className = 'good';
            goods.insertAdjacentHTML("beforeend", '<p class ="cart__text">Тип товара: ' + catalog.goods[i].typeofgoods + '</p>');
            goods.insertAdjacentHTML("beforeend", '<p class ="cart__text">Цена товара: ' + catalog.goods[i].price + '</p>');
            goods.insertAdjacentHTML("beforeend", '<button class = "btn" data-id  = ' + id + '>Добавить в корзину</button>');
            id++;
        };
        this.addToCart();
    },
    addToCart() {
        document.querySelector('#products').addEventListener('click', (Event) => {
            if (Event.target.tagName !== 'BUTTON') return;
            this.pushToCart(Event.target.dataset.id);
        });
    },
    pushToCart(id) {
        var number = +id;
        cart.list.push(this.goods[number]);
        total = +catalog.goods[number].price;
        cart.amountTotal(total);
    },
};

var total = 0;
var sum = 0;
const cart = {

    list: [],

    amountTotal(total) {
        sum = sum + total;
        this.initBasket();
    },

    initBasket() {
        const emptiCart = document.querySelector('.cart__empty');
        if (this.list.length == 0) {
            emptiCart.textContent = 'Корзина пуста';
        } else {
            emptiCart.textContent = 'Товар добавлен в корзину';
        };

        const quantityCartGoods = document.querySelector('.cart__list');
        quantityCartGoods.textContent = 'Количество выбраного товара в корзине: ' + cart.list.length;
        const summaryCartGoods = document.querySelector('.cart__list--sum');
        summaryCartGoods.textContent = 'Стоимость выбранного товара: ' + sum;
        this.clear();
    },

    clear() {
        document.querySelector('.clear').addEventListener('click', (Event) => this.reset())
    },

    reset() {
        sum = 0;
        this.list = [];
        this.initBasket();
    },
};
cart.reset();
catalog.initCatalog();