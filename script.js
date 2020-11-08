// task 1

var num = 0;
var numSimple = '', i, issimple;

while (num < 100) {
    issimple = true;
    num++;
    for (i = 2; i <= Math.sqrt(num); i++) {
        if (num % i == 0) {
            issimple = false;
            break;
        }
    }
    if (issimple) {
        numSimple += num + ' ';
    }
}

document.getElementById('taskOne').innerHTML = numSimple;


// task 2

var userTask, userSum = 0;
var task = [
    {
        product: 'Товар 1',
        price: 500
    },
    {
        product: 'Товар 2',
        price: 700
    },
    {
        product: 'Товар 3',
        price: 800
    },
    {
        product: 'Товар 4',
        price: 150
    }
];

userTask = 'В вашей корзине:' + '<br>';

for (good of task) {
    userTask += good.product + ' - ' + good.price + ' руб.' + '<br>';
    userSum += good.price;
}

document.getElementById('task').innerHTML = userTask;
document.getElementById('taskSum').innerHTML = 'Общая сумма: ' + userSum + ' руб.';

// Task 3

var productInp = {};
var userSumma = 0;
var userTaskInp = [];

function add() {
    productInp = {
        products: document.taskForm.itemName.value,
        prices: document.taskForm.itemPrice.value
    }
    userTaskInp.push(productInp);
    document.getElementById('userCart').innerHTML += '<tr><td>' + productInp.products + '</td><td>' + productInp.prices + ' руб.' + '</td></tr>';
    document.taskForm.itemName.value = '';
    document.taskForm.itemPrice.value = '';
    countBasketPrice()
}

function countBasketPrice() {
    for (goods of userTaskInp) {
        userSumma += +goods.prices;
    }
    document.getElementById('userSummaP').innerHTML = 'Всего: ' + userSumma + ' руб.';
}


// Task 4

var a;
var b = document.getElementById('taskFour');

for (a = 0; a < 10; b.innerHTML += a++ + ' ') {

}

// Task 5

var i;
var d = '';

for (i = 0; i<20; i++){
    d += '*';
    console.log(d);
}

