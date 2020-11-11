var userUnswer;
var unswersString = '';
var mark = true;
var question = 'a';
var userMoney = 0;
var trueUnswer = gameText[question + '0'];

alert('Добро пожаловать на игру "Кто хочет стать Миллионером!');

do {
    unswersString = '';
    for (i = 1; i < 5; i++) {
        unswersString += gameText[question + i];
    }
    userUnswer = +prompt(gameText[question + '00']+ 'Стоимость вопроса '+ gameText[question + 'c'] + 'руб.\n' + '\n'+ unswersString + '\nВведите номер ответа цифрами\n' + '-1 - Выход из игры \n');
    if (userUnswer == '-1') {
        break;
    } else {
        isOk(userUnswer);
        console.log(userUnswer);
        if (userUnswer == gameText[question + '0']) {
            userMoney += gameText[question + 'c'];
            question = gameText[question + 's'];
        } else if (userUnswer != gameText[question + '0'] && (userUnswer > 0 && userUnswer < 5)) {
            userMoney = 0;
            alert('Ответ не верный, вы проиграли. \nПравильный ответ - ' + gameText[question + trueUnswer] +'Ваш выигрыш - ' +
            userMoney + ' руб.!');
            break;
        }
        if (gameText[question + '00'] == undefined) {
            alert('Поздравляем! Вы ответили верно на все вопросы!\nВаш выигрыш - ' +
                userMoney + ' руб.!');
            break;
        }
        mark = false;
    }
} while (!mark);

alert('Спасибо за игру!')

function isOk(unswer) {
    if (unswer > 0 && unswer < 5) {
        mark = true;
    } else if (unswer <= 0 || unswer >= 5) {
        alert('Такого ответа не существует, попробуйте еще раз');
        console.log(unswer);
        mark = false;
    }
    else if (isNaN(unswer) || isFinite(unswer)) {
        alert('Введите номер ответа в числовом виде');
        mark = false;
    }
}