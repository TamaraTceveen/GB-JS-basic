var productInp = {};
var userSumma = 0;
var userTaskInp = [];


function addToCart(itemNumber) {
    
    productInp = {
        products: document.querySelector("p#item"+ itemNumber).innerText,
        prices: document.querySelector("span#item"+itemNumber+"Price").innerText,
        count: document.querySelector("input#item"+itemNumber+"Count").value
    }
    userTaskInp.push(productInp);
    

    document.getElementById('userCart').innerHTML += '<tr><td>' + productInp.products + '</td><td>' + productInp.prices + ' руб.' + '</td><td>' + productInp.count + ' шт.' + '</td></tr>';
    
    console.log(userTaskInp);

}

function countBasketPrice() {
    userSumma = 0;
    for (goods of userTaskInp) {
        userSumma += +goods.prices * +goods.count;
        console.log(goods.count);
    }
    document.getElementById('userSummaP').innerHTML = 'Всего: ' + userSumma + ' руб.';
}

