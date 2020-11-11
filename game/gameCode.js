//После игры необходимо спросить номер вопроса. 
//По номеру вопроса нужно вывести текст вопроса и текст выбранного ответа

var ok = 0;
var eventSelection = 0;

var i = 0;
var section = 'a';
var selectionHistory = [];

do {
    question = works[section + '00'];
    if (question == undefined) { break; }

    var ans = '';
    var ansArr = [];
    for (i = 1; i <= works[section + 0]; ++i) {
        ansArr.push(works[section + i]);
        ans += works[section + i];
    }
    var isOk = false;
    while (!isOk) {
        eventSelection = +prompt(question + ans + '-1 - Выход из игры');
        isOk = (isAnswer(works[section + 0], eventSelection));
    }
    selectionHistory.push(question + '\n' + ansArr[eventSelection - 1]);
    if (eventSelection == -1) { break; }
    section = works[section + eventSelection + 's'];
} while (1);

alert('Спасибо за игру');
while (1) {
    var a = selectionHistory[prompt('введите номер вопроса для просмотра истории выбора:') - 1];
    if (a != undefined) {
        alert(a);
        break;
    }
    alert('вы ввели недопустимое значение');
}

//------------------------------------------
function isAnswer(q, eventSelection) {
    if (isNaN(eventSelection) || !isFinite(eventSelection)) {
        alert('Вы ввели недопустимый символ');
        return false;
    }
    else if (eventSelection == -1) {
        return true;
    }
    else if (eventSelection < 1 || eventSelection > q) {
        alert('Ваше число выходит из допустимого диапозона');
        return false;
    }
    return true;
}

