'use strict'
const chess = document.getElementById('chess');
let spam = ""
for (let i = 0; i < 8; i++){
    for (let j = 0; j < 8; j++){
        spam += '<div class="cell"></div>';
    }
    spam += '<br>';
};
chess.innerHTML = spam;
const cell = Array.from(document.getElementsByClassName('cell'));
for (let i = 0; i < cell.length; i++) {
    cell[i].style.height = '100px';
    cell[i].style.width = '100px';
    cell[i].style.display = 'inline-block'
    if (Math.floor(i / 8) % 2 === 0) {
        if (i % 2 !== 0) {
            cell[i].style.background = 'black';
        }
    } else if (i % 2 === 0) {
        cell[i].style.background = 'black';
    }
}