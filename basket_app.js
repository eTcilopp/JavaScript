// НЕЗАКОНЧЕННЫЙ КОД ДЛЯ ОБРАБОТКИ КЛИКА КНОПКИ BUY ИНТЕРНЕТ-МАГАЗИНА

'use strict'

let basketBtn = document.getElementById('buyBtn');
basketBtn.addEventListener('click', function(event){
    let id = event.srcElement.dataset.id;
    let price = event.srcElement.dataset.price;
    let name = event.srcElement.dataset.price;
    basket.addProduct({id: id, price: price, name: name});
})

let basket ={
    products: {},

    addProduct(product) {
        this.addProductToObject(product);
        //this.renderProductInBasket(product);
        //this.renderTotalSum();
        //this.addRemoveBtnsListeners();
    },

    addProductToObject(product){
        if(this.products[product.id]==undefined) {
            this.products[product.id]={
                price: product.price,
                name: product.name,
                count: 1
            }
        }else{
            this.products[product.id].count++;
        };
        console.log(this.products[product.id].count);
    }
}