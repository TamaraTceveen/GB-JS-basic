var zonne = document.getElementById('desk');

var chessDesk = {
    a1: 'Лб',
    a2: 'Пб',
    a3: '',
    a4: '',
    a5: '',
    a6: '',
    a7: 'Пч',
    a8: 'Лч',
    b1: 'Кб',
    b2: 'Пб',
    b3: '',
    b4: '',
    b5: '',
    b6: '',
    b7: 'Пч',
    b8: 'Кч',
    c1: 'Сб',
    c2: 'Пб',
    c3: '',
    c4: '',
    c5: '',
    c6: '',
    c7: 'Пч',
    c8: 'Сч',
    d1: 'Фб',
    d2: 'Пб',
    d3: '',
    d4: '',
    d5: '',
    d6: '',
    d7: 'Пч',
    d8: 'Фч',
    e1: 'Крб',
    e2: 'Пб',
    e3: '',
    e4: '',
    e5: '',
    e6: '',
    e7: 'Пч',
    e8: 'Крч',
    f1: 'Сб',
    f2: 'Пб',
    f3: '',
    f4: '',
    f5: '',
    f6: '',
    f7: 'Пч',
    f8: 'Сч',
    g1: 'Кб',
    g2: 'Пб',
    g3: '',
    g4: '',
    g5: '',
    g6: '',
    g7: 'Пч',
    g8: 'Кч',
    h1: 'Лб',
    h2: 'Пб',
    h3: '',
    h4: '',
    h5: '',
    h6: '',
    h7: 'Пч',
    h8: 'Лч'
}

var chessDeskImg = {
    a1: '&#9814;',
    a2: '&#9817;',
    a3: '',
    a4: '',
    a5: '',
    a6: '',
    a7: '&#9823;',
    a8: '&#9820;',
    b1: '&#9816;',
    b2: '&#9817;',
    b3: '',
    b4: '',
    b5: '',
    b6: '',
    b7: '&#9823;',
    b8: '&#9822;',
    c1: '&#9815;',
    c2: '&#9817;',
    c3: '',
    c4: '',
    c5: '',
    c6: '',
    c7: '&#9823;',
    c8: '&#9821;',
    d1: '&#9813;',
    d2: '&#9817;',
    d3: '',
    d4: '',
    d5: '',
    d6: '',
    d7: '&#9823;',
    d8: '&#9819;',
    e1: '&#9812;',
    e2: '&#9817;',
    e3: '',
    e4: '',
    e5: '',
    e6: '',
    e7: '&#9823;',
    e8: '&#9818;',
    f1: '&#9815;',
    f2: '&#9817;',
    f3: '',
    f4: '',
    f5: '',
    f6: '',
    f7: '&#9823;',
    f8: '&#9821;',
    g1: '&#9816;',
    g2: '&#9817;',
    g3: '',
    g4: '',
    g5: '',
    g6: '',
    g7: '&#9823;',
    g8: '&#9822;',
    h1: '&#9814;',
    h2: '&#9817;',
    h3: '',
    h4: '',
    h5: '',
    h6: '',
    h7: '&#9823;',
    h8: '&#9820;'
}

function taskOne(divId) {
    var alf = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

    var myTable = document.createElement("table");
    myTable.style = "border: 1px solid;"
    for (let i = 0; i < 10; i++) {
        var myTr = document.createElement("tr");
        for (let j = 0; j < 10; j++) {
            var myTd = document.createElement("td");
            myTd.style = "background:#6c6b6b; margin:2px; width: 80px; height: 80px";
            myTd.style.textAlign = "center";
            myTd.style.fontWeight = "bold";
            myTr.appendChild(myTd);
            if ((i == 0 || i == 9) && !(j == 0 || j == 9)) {
                myTd.innerText = alf[j - 1];
                if (i == 0) {
                    myTd.style.transform = "rotate(180.0deg)"
                }
            }

            if ((i > 0 && i < 9) && (j == 0 || j == 9)) {
                myTd.innerText = 9 - i;
                if (j == 9) {
                    myTd.style.transform = "rotate(180.0deg)"
                }
            }

            if (!(i == 0 || i == 9) && !(j == 0 || j == 9)) {
                myTd.id = alf[j - 1] + (9 - i);
                if (((i + j) % 2) == 0) {
                    myTd.style.backgroundColor = 'orange';
                }
            }
        }
        myTable.appendChild(myTr);

    }

    divId.appendChild(myTable);

}



function fullDesk() {

    taskOne(zonne);

    for (var i in chessDesk) {
        var myTd = document.getElementById(i);
        myTd.innerHTML = chessDesk[i];
        myTd.style.fontSize = "25px";
        if (chessDesk[i].includes('б')) {
            myTd.style.color = '#fff';
        }
    }
}



function fullDeskImg() {

    taskOne(zonne);

    for (var i in chessDeskImg) {
        var myTd = document.getElementById(i);
        myTd.innerHTML = chessDeskImg[i];
        myTd.style.fontSize = "50px";
    }
}