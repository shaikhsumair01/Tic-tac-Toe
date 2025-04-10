"use strict";
const game = document.querySelector("#gameboard");
const player = document.querySelector("#player");
const startcells = ["","","","","","","","",""];

player.textContent = " Player 1 goes First";
function gameElements(){
    startcells.forEach((cell,index) => {
    const cellElement = document.createElement('div')
    cellElement.classList.add("bg-white border-3 border-purple-400 h-full")
    const circle = document.createElement('div')
    circle.classList.add("h-9 w-9 rounded border-2 border-blue-400")
    circle.append(game)
    game.append(cellElement)
    });
}