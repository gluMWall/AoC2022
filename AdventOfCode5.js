let i, j, index; 
let inputBuild, inputMoves;
let movesArr, buildArr;
let column = [];
let columns = [];
let count, from, to;

inputBuild = "                    [Q]     [P] [P]                 [G] [V] [S] [Z] [F]             [W] [V] [F] [Z] [W] [Q]         [V] [T] [N] [J] [W] [B] [W]     [Z] [L] [V] [B] [C] [R] [N] [M] [C] [W] [R] [H] [H] [P] [T] [M] [B] [Q] [Q] [M] [Z] [Z] [N] [G] [G] [J] [B] [R] [B] [C] [D] [H] [D] [C] [N] ";
inputMoves = "move 3 from 6 to 2 move 5 from 6 to 7 move 6 from 2 to 5 move 1 from 9 to 7 move 1 from 1 to 9 move 1 from 5 to 3 move 1 from 2 to 5 move 3 from 4 to 5 move 10 from 7 to 3 move 1 from 4 to 9 move 6 from 8 to 7 move 4 from 7 to 8 move 1 from 7 to 3 move 1 from 1 to 2 move 1 from 2 to 8 move 1 from 9 to 1 move 3 from 9 to 4 move 4 from 8 to 3 move 4 from 7 to 1 move 4 from 4 to 6 move 2 from 8 to 7 move 9 from 3 to 8 move 2 from 7 to 4 move 3 from 4 to 9 move 4 from 1 to 9 move 4 from 3 to 9 move 2 from 1 to 4 move 1 from 4 to 6 move 3 from 3 to 2 move 1 from 2 to 8 move 1 from 2 to 7 move 3 from 6 to 2 move 2 from 6 to 7 move 4 from 2 to 3 move 3 from 7 to 9 move 2 from 5 to 6 move 15 from 9 to 4 move 4 from 9 to 2 move 12 from 5 to 4 move 9 from 8 to 5 move 25 from 4 to 7 move 1 from 4 to 7 move 1 from 4 to 8 move 2 from 2 to 5 move 1 from 4 to 2 move 23 from 7 to 6 move 2 from 5 to 2 move 22 from 6 to 8 move 4 from 5 to 9 move 1 from 7 to 9 move 2 from 6 to 4 move 2 from 4 to 7 move 25 from 8 to 3 move 1 from 2 to 1 move 3 from 2 to 3 move 1 from 6 to 8 move 1 from 1 to 8 move 1 from 2 to 8 move 1 from 8 to 1 move 4 from 5 to 7 move 1 from 8 to 4 move 5 from 9 to 8 move 5 from 8 to 9 move 1 from 8 to 5 move 3 from 5 to 4 move 3 from 9 to 1 move 30 from 3 to 4 move 3 from 1 to 4 move 2 from 9 to 5 move 4 from 7 to 9 move 16 from 4 to 8 move 6 from 3 to 9 move 3 from 7 to 3 move 19 from 4 to 7 move 8 from 9 to 4 move 1 from 1 to 9 move 13 from 7 to 9 move 3 from 7 to 8 move 3 from 5 to 9 move 4 from 8 to 3 move 2 from 7 to 3 move 14 from 9 to 4 move 10 from 3 to 1 move 12 from 4 to 8 move 6 from 1 to 9 move 1 from 1 to 2 move 1 from 7 to 1 move 6 from 9 to 3 move 17 from 8 to 6 move 10 from 8 to 5 move 1 from 7 to 8 move 1 from 9 to 5 move 2 from 3 to 1 move 4 from 5 to 9 move 1 from 8 to 7 move 6 from 9 to 7 move 4 from 4 to 2 move 3 from 4 to 6 move 4 from 5 to 9 move 4 from 9 to 3 move 1 from 2 to 4 move 4 from 4 to 7 move 3 from 5 to 3 move 1 from 4 to 5 move 5 from 1 to 2 move 1 from 1 to 9 move 7 from 2 to 7 move 1 from 5 to 7 move 8 from 3 to 5 move 20 from 6 to 7 move 9 from 7 to 9 move 2 from 2 to 9 move 2 from 3 to 1 move 2 from 1 to 3 move 2 from 3 to 4 move 2 from 4 to 6 move 1 from 3 to 9 move 1 from 4 to 9 move 1 from 6 to 9 move 2 from 5 to 8 move 2 from 8 to 5 move 1 from 6 to 7 move 2 from 5 to 8 move 6 from 9 to 5 move 2 from 8 to 6 move 11 from 9 to 2 move 1 from 6 to 5 move 11 from 2 to 5 move 1 from 6 to 4 move 7 from 5 to 9 move 7 from 9 to 1 move 1 from 4 to 9 move 28 from 7 to 5 move 1 from 7 to 5 move 5 from 5 to 9 move 5 from 9 to 3 move 6 from 1 to 8 move 1 from 1 to 7 move 5 from 3 to 2 move 1 from 7 to 8 move 7 from 8 to 1 move 1 from 9 to 4 move 2 from 2 to 5 move 22 from 5 to 3 move 1 from 7 to 8 move 1 from 4 to 7 move 1 from 8 to 9 move 1 from 9 to 4 move 14 from 5 to 7 move 5 from 5 to 9 move 19 from 3 to 4 move 1 from 2 to 9 move 2 from 2 to 5 move 1 from 5 to 1 move 6 from 1 to 7 move 2 from 7 to 6 move 1 from 1 to 9 move 2 from 5 to 8 move 8 from 4 to 5 move 3 from 4 to 7 move 3 from 3 to 5 move 2 from 8 to 9 move 16 from 7 to 5 move 9 from 4 to 6 move 22 from 5 to 3 move 1 from 5 to 8 move 1 from 8 to 7 move 10 from 3 to 4 move 1 from 5 to 4 move 10 from 4 to 5 move 8 from 5 to 2 move 5 from 2 to 7 move 5 from 7 to 1 move 4 from 7 to 6 move 3 from 9 to 7 move 2 from 2 to 3 move 3 from 5 to 1 move 6 from 9 to 7 move 5 from 7 to 8 move 6 from 1 to 5 move 6 from 3 to 4 move 4 from 4 to 2 move 1 from 4 to 6 move 5 from 8 to 7 move 3 from 2 to 3 move 1 from 1 to 4 move 1 from 1 to 9 move 2 from 2 to 1 move 2 from 4 to 3 move 4 from 3 to 7 move 3 from 7 to 3 move 13 from 6 to 1 move 1 from 9 to 2 move 6 from 3 to 5 move 8 from 1 to 4 move 1 from 2 to 7 move 9 from 4 to 9 move 7 from 5 to 1 move 2 from 5 to 6 move 1 from 1 to 4 move 1 from 4 to 3 move 2 from 1 to 2 move 5 from 3 to 6 move 2 from 6 to 1 move 13 from 7 to 6 move 2 from 3 to 4 move 2 from 2 to 9 move 2 from 7 to 8 move 6 from 9 to 2 move 1 from 9 to 3 move 1 from 5 to 2 move 7 from 1 to 2 move 1 from 6 to 7 move 1 from 4 to 8 move 1 from 3 to 1 move 1 from 7 to 8 move 7 from 1 to 9 move 4 from 8 to 6 move 1 from 5 to 3 move 9 from 9 to 5 move 1 from 1 to 2 move 14 from 2 to 7 move 2 from 9 to 3 move 13 from 5 to 3 move 24 from 6 to 9 move 6 from 3 to 5 move 14 from 7 to 9 move 1 from 4 to 1 move 20 from 9 to 7 move 9 from 3 to 8 move 15 from 9 to 6 move 1 from 5 to 8 move 1 from 2 to 3 move 14 from 6 to 3 move 2 from 3 to 4 move 2 from 3 to 6 move 13 from 7 to 1 move 8 from 3 to 5 move 1 from 3 to 9 move 8 from 5 to 4 move 4 from 5 to 2 move 10 from 1 to 3 move 6 from 4 to 5 move 4 from 5 to 1 move 3 from 1 to 6 move 7 from 8 to 2 move 4 from 4 to 3 move 13 from 3 to 6 move 3 from 8 to 1 move 3 from 7 to 8 move 3 from 8 to 4 move 1 from 4 to 2 move 2 from 3 to 4 move 1 from 5 to 7 move 4 from 7 to 1 move 2 from 3 to 5 move 3 from 2 to 1 move 1 from 4 to 7 move 7 from 2 to 4 move 2 from 4 to 3 move 1 from 7 to 5 move 4 from 9 to 5 move 1 from 4 to 2 move 3 from 2 to 9 move 8 from 1 to 7 move 1 from 3 to 5 move 7 from 5 to 7 move 10 from 6 to 4 move 1 from 5 to 1 move 4 from 1 to 3 move 9 from 7 to 6 move 3 from 1 to 8 move 12 from 4 to 6 move 5 from 4 to 6 move 2 from 9 to 3 move 3 from 8 to 7 move 1 from 1 to 3 move 3 from 7 to 8 move 5 from 7 to 5 move 1 from 7 to 5 move 2 from 3 to 1 move 2 from 8 to 7 move 3 from 5 to 1 move 1 from 9 to 7 move 1 from 8 to 3 move 4 from 7 to 8 move 4 from 5 to 9 move 4 from 1 to 7 move 3 from 8 to 6 move 1 from 8 to 1 move 1 from 7 to 1 move 1 from 5 to 8 move 1 from 8 to 7 move 7 from 3 to 1 move 3 from 9 to 1 move 1 from 9 to 3 move 28 from 6 to 3 move 3 from 7 to 8 move 2 from 8 to 2 move 1 from 2 to 7 move 2 from 6 to 1 move 18 from 3 to 9 move 5 from 3 to 4 move 2 from 7 to 4 move 2 from 1 to 8 move 1 from 2 to 6 move 7 from 6 to 4 move 4 from 4 to 3 move 3 from 8 to 1 move 4 from 9 to 8 move 1 from 4 to 8 move 9 from 1 to 6 move 5 from 1 to 3 move 4 from 6 to 7 move 7 from 6 to 3 move 5 from 8 to 1 move 12 from 3 to 6 move 7 from 6 to 4 move 4 from 3 to 5 move 5 from 6 to 7 move 12 from 4 to 3 move 6 from 1 to 4 move 4 from 4 to 2 move 14 from 9 to 8 move 17 from 3 to 2 move 5 from 4 to 9 move 1 from 9 to 6 move 5 from 2 to 1 move 1 from 9 to 8 move 5 from 1 to 6 move 2 from 2 to 6 move 12 from 2 to 4 move 6 from 7 to 2 move 3 from 7 to 6 move 3 from 9 to 8 move 5 from 4 to 7 move 4 from 2 to 6 move 3 from 6 to 8 move 5 from 8 to 2 move 7 from 6 to 8 move 1 from 7 to 3 move 6 from 4 to 3 move 1 from 8 to 1 move 1 from 5 to 7 move 2 from 6 to 8 move 13 from 8 to 2 move 3 from 5 to 4 move 1 from 1 to 2 move 3 from 6 to 2 move 1 from 1 to 4 move 4 from 4 to 8 move 8 from 3 to 1 move 2 from 4 to 8 move 15 from 2 to 4 move 16 from 8 to 3 move 1 from 8 to 6 move 1 from 7 to 2 move 8 from 1 to 2 move 1 from 6 to 8 move 6 from 3 to 1 move 3 from 3 to 8 move 6 from 3 to 1 move 6 from 2 to 9 move 2 from 1 to 4 move 1 from 8 to 5 move 8 from 2 to 9 move 8 from 1 to 4 move 3 from 8 to 6 move 21 from 4 to 7 move 1 from 9 to 7 move 2 from 6 to 8 move 1 from 5 to 1 move 1 from 3 to 9 move 8 from 9 to 4 move 1 from 1 to 7 move 1 from 1 to 4 move 1 from 6 to 8 move 1 from 9 to 3 move 2 from 9 to 5 move 2 from 5 to 3 move 1 from 9 to 4 move 3 from 8 to 2 move 1 from 1 to 4 move 4 from 4 to 9 move 3 from 3 to 2 move 5 from 9 to 1 move 17 from 7 to 1 move 1 from 9 to 1 move 2 from 2 to 4 move 1 from 4 to 2 move 8 from 2 to 9 move 5 from 4 to 5 move 6 from 4 to 8 move 20 from 1 to 6 move 2 from 9 to 8 move 1 from 2 to 9 move 2 from 8 to 7 move 8 from 7 to 8 move 4 from 5 to 9 move 14 from 8 to 7 move 1 from 5 to 7 move 7 from 9 to 1 move 3 from 6 to 4 move 3 from 9 to 7 move 12 from 6 to 7 move 22 from 7 to 9 move 2 from 2 to 5 move 10 from 1 to 7 move 1 from 4 to 1 move 2 from 6 to 1 move 1 from 1 to 3 move 2 from 4 to 8 move 2 from 8 to 6 move 1 from 3 to 8 move 1 from 4 to 1 move 2 from 5 to 3 move 1 from 8 to 4 move 2 from 3 to 7 move 19 from 9 to 7 move 1 from 1 to 4 move 2 from 9 to 1 move 2 from 1 to 6 move 1 from 6 to 5 move 42 from 7 to 8 move 1 from 7 to 6 move 2 from 4 to 8 move 7 from 6 to 8 move 2 from 1 to 5 move 2 from 9 to 5 move 14 from 8 to 3 move 22 from 8 to 2 move 3 from 5 to 6 move 10 from 8 to 6 move 5 from 8 to 9 move 12 from 6 to 7 move 2 from 5 to 1 move 5 from 3 to 2 move 7 from 3 to 5 move 2 from 5 to 1 move 2 from 3 to 7 move 4 from 1 to 2 move 1 from 5 to 7 move 1 from 5 to 4 move 1 from 6 to 2 move 1 from 9 to 2 move 9 from 7 to 3 move 1 from 4 to 1 move 3 from 7 to 5 move 4 from 3 to 2 move 5 from 2 to 3 move 2 from 5 to 2 move 34 from 2 to 9 move 1 from 1 to 5 move 15 from 9 to 3 move 2 from 3 to 2 move 1 from 5 to 4 move 7 from 3 to 8 move 3 from 9 to 2 move 6 from 9 to 4 move 5 from 9 to 3 move 4 from 4 to 6 move 1 from 6 to 8 move 1 from 3 to 5 move 6 from 3 to 2 move 1 from 4 to 9 move 2 from 4 to 2 move 4 from 5 to 8 move 1 from 5 to 6 move 1 from 7 to 6 move 1 from 9 to 6 move 1 from 7 to 2 move 12 from 8 to 7 move 2 from 7 to 3 move 4 from 6 to 9 move 7 from 9 to 4 move 9 from 3 to 9 move 11 from 7 to 4 move 3 from 9 to 6 move 1 from 4 to 1 move 15 from 4 to 3 move 2 from 4 to 1 move 3 from 1 to 4 move 17 from 3 to 7 move 4 from 3 to 7 move 7 from 9 to 2 move 3 from 4 to 1 move 4 from 6 to 9 move 1 from 9 to 6 move 1 from 3 to 1 move 5 from 7 to 9 move 8 from 9 to 4 move 1 from 1 to 6 move 6 from 4 to 9 move 4 from 2 to 3 move 1 from 4 to 3 move 1 from 4 to 9 move 1 from 1 to 7 move 1 from 7 to 9 move 3 from 6 to 2 move 9 from 2 to 3 move 1 from 9 to 4 move 1 from 1 to 5 move 12 from 7 to 6 move 4 from 9 to 8";

var removeFrom = inputMoves.replaceAll('move ', '');
inputMoves = removeFrom;
removeFrom = inputMoves.replaceAll('from ', '');
inputMoves = removeFrom;
removeFrom = inputMoves.replaceAll('to ', '');
inputMoves = removeFrom;

movesArr = Array.from(inputMoves.split(" "));

buildArr = Array.from(inputBuild.match(/.{1,4}/g));


for(i=0; i<9; i++){

    for(j=0; j<9; j++){

        if(buildArr[i+(j*9)]!="    "){

            column.push(buildArr[i+(j*9)]);

        }
        


    }
   
    columns[i]= Array.from(column);
    columns[i].pop();
    column = [];

}

/* Solution To The First Part

for(i=0; i<movesArr.length; i=i+3){
    count = Number(movesArr[i]);
    for(j=0; j<count; j++){
        to = Number(movesArr[i+2])-1;
        from = Number(movesArr[i+1]-1);
        columns[to].unshift(columns[from][0]);
        removeFrom = columns[Number(movesArr[i+1]-1)].shift();
    }
}
columns.forEach(function(entry){console.log(entry);});

*/




//Solution To The Second Part

for(i=0; i<movesArr.length; i=i+3){
    count = Number(movesArr[i]);
    for(j=0; j<count; j++){
        to = Number(movesArr[i+2])-1;
        from = Number(movesArr[i+1]-1);
        columns[to].unshift(columns[from][count-j-1]);
    }

    for(j=0; j<count; j++){
        columns[from].shift();
    }

}    
columns.forEach(function(entry){console.log(entry);});