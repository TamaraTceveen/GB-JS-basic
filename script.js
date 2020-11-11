var a = Math.trunc(Math.random() * 1000);
var obj;

console.log(a);
console.log(Array.from(a.toString()));

a = Array.from(a.toString());

function toObj(arr){
    switch(arr.length){
        case 1:
            arrLength(arr[0],0,0);
            console.log(obj);
            break;
        case 2:
            arrLength(arr[1], arr[0], 0);
            console.log(obj);
            break;
        case 3:
            arrLength(arr[2], arr[1], arr[0]);
            console.log(obj);
            break;
        default:
            console.log('Неверное число, попробуйте еще раз.')
    }
}

function arrLength(b,c,d){
    obj = {
        'единицы': b,
        'десятки': c,
        'сотни': d
    }
    return obj;
}

toObj(a);