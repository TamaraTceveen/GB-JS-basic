// Задание 3
alert("Задание 3:");
var a = +prompt('Введите целое число а: ');
var b = +prompt('Введите целое число b: ');

if (a >= 0 && b >= 0) {
    alert('Разность чисел a и b: ' + (a - b));
}
else if (a < 0 && b < 0) {
    alert('Произведение чисел a и b: ' + (a * b));
}
else if (a >= 0 && b < 0 || a < 0 && b >= 0) {
    alert('Сумма чисел a и b: ' + (a + b));
}
else {
    alert('Введите число');
}


// Задание 4

var a = (parseInt(Math.random() * 10 + 5));
var data = '';
var dataRec = '';

switch (a) {
    case 0:
        data += '0 ';
    case 1:
        data += '1 ';
    case 2:
        data += '2 ';
    case 3:
        data += '3 ';
    case 4:
        data += '4 ';
    case 5:
        data += '5 ';
    case 6:
        data += '6 ';
    case 7:
        data += '7 ';
    case 8:
        data += '8 ';
    case 9:
        data += '9 ';
    case 10:
        data += '10 ';
    case 11:
        data += '11 ';
    case 12:
        data += '12 ';
    case 13:
        data += '13 ';
    case 14:
        data += '14 ';
    case 15:
        data += '15 ';
}

document.getElementById("taskFour").innerHTML = data;

function rec(a) {
    if (a > 15) {
        return;
    }
    dataRec += a + ' ';
    rec(a + 1);
    return dataRec;
}

document.getElementById("taskFourRec").innerHTML = rec(a);


// Задание 5

alert('Задание 5');

var x = +prompt('Введите число 1: ');
var y = +prompt('Введите число 2: ');
var oper = prompt('Введите +, -, * или / :');

function sum(x, y) {
    return (x + y);
}

function min(x, y) {
    return (x - y);
}

function multipl(x, y) {
    return (x * y);
}

function division(x, y) {
    return (x / y);
}

if (oper == '+') {
    alert(x + ' + ' + y + ' = ' + sum(x, y));
}
else if (oper == '-') {
    alert(x + ' - ' + y + ' = ' + min(x, y));
}
else if (oper == '*') {
    alert(x + ' * ' + y + ' = ' + multipl(x, y));
}
else if (oper == '/') {
    alert(x + ' / ' + y + ' = ' + division(x, y));
} else {
    alert('Проверьте правильность ввода чисел либо операторов');
}

// Задание 6

alert('Задание 6');

var x = +prompt('Введите число 1: ');
var y = +prompt('Введите число 2: ');
var operation = prompt('Введите +, -, * или / :');

function mathOperation(x, y, operation) {
    switch (operation) {
        case '+':
            return (sum(x, y));
            break;
        case '-':
            return (min(x, y));
            break;
        case '*':
            return (multipl(x, y));
            break;
        case '/':
            return (division(x, y));
            break;
        default:
            alert('Проверьте правильность ввода чисел либо операторов');
    }
}

alert(x + ' ' + operation + ' ' + y + ' = ' + mathOperation(x, y, operation));

// Задание 8

alert('Задание 8');

var val = +prompt('Введите число: ');
var pow = +prompt('Введите степень числа: ');
var res = 1;

if (pow <= 0) {
    alert('Введите степень больше 0');
} else {
    function power(val, pow) {
        if (pow == 0) {
            return;
        } else {
            res *= val;
        }
        console.log(res);
        power(val, pow - 1);
        return res;
    }

    alert(val + ' в степени ' + pow + ' = ' + power(val, pow));
}
