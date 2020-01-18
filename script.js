/*var matrix = [
    [0, 0, 1, 0, 0,0,1, 1, 0, 0, 2,1],
    [1, 3, 3, 0, 0,1,2, 2, 0, 0, 0,0],
    [0, 1, 0, 2, 3,1,1, 1, 2, 2, 0,0],
    [0, 2, 1, 3, 0,3,0, 0, 4, 2, 3,0],
    [1, 1, 0, 4, 2,1,0, 0, 1, 0, 0,0],
    [1, 1, 2, 2, 0,0,0, 2, 1, 3, 0,0],
    [1, 1, 0, 0, 0,0,1, 3, 3, 0, 0,1]
];*/


var grassArr = [];
var grassEaterArr = [];
var gishatixArr = [];
var horseArr = [];
var childArr=[];
var side = 10;

let matrix = []; // Մատրիցի ստեղծում
let rows = 60; // Տողերի քանակ
let columns = 60; // Սյուների քանակ

for (let y = 0; y < rows; y++) {
matrix[y] = []; // Մատրիցի նոր տողի ստեղծում
for (let x = 0; x < columns; x++) {
let a = Math.floor(Math.random() * 100);
if (a >= 0 && a < 30) {
matrix[y][x] = 0; // Մատրիցի 20 տոկոսը կլինի 0
}
if (a >= 30 && a < 50) {
matrix[y][x] = 1; // Մատրիցի 20 տոկոսը կլինի 1
}
else if (a >= 50 && a < 70) {
matrix[y][x] = 2; // Մատրիցի 20 տոկոսը կլինի 2
}
else if (a >= 70 && a < 80) {
matrix[y][x] = 3; // Մատրիցի 20 տոկոսը կլինի 3
}
else if (a >= 80 && a < 100) {
matrix[y][x] = 4; // Մատրիցի 20 տոկոսը կլինի 4
}

}
}

function setup() {
   
    frameRate(5);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');

    


    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                var gr = new Grass(x, y, 1);
                grassArr.push(gr)
            }
            else if (matrix[y][x] == 2) {
                var et = new GrassEater(x,y,2);
                grassEaterArr.push(et);
                
            }
            else if (matrix[y][x] == 3) {
                var gi = new Gishatix(x,y,3);
                gishatixArr.push(gi);
                
            }
            else if (matrix[y][x] == 4) {
                var hr = new Horse(x,y,4);
                horseArr.push(hr);
                
            }

            else if (matrix[y][x] == 5) {
                var ch = new Child(x,y,);
                childArr.push(ch);
                
            }
        }
    }
 
}

function draw() {

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                fill("green");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 3) {
                fill("red");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 4) {
                fill("black");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 5) {
                fill("blue");
                rect(x * side, y * side, side, side);
            }
        }
    }

    
    for (var i in grassArr) {
        grassArr[i].mul();
    }
     for (var i in grassEaterArr) {
        grassEaterArr[i].move();
        grassEaterArr[i].eat();
        grassEaterArr[i].mul();
        grassEaterArr[i].die();
    }

    for (var i in gishatixArr) {
        gishatixArr[i].move();
        gishatixArr[i].eat();
        gishatixArr[i].mul();
        gishatixArr[i].die();
    }

    for (var i in horseArr) {
        horseArr[i].move();
        horseArr[i].eat();
        horseArr[i].mul();
        horseArr[i].die();
    }

    for (var i in childArr) {
        childArr[i].move();
        childArr[i].eat();
        childArr[i].mul();
        childArr[i].die();
    }
}
