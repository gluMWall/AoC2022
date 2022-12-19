let i, j, k, invisible, visible, total;
let input, columnAm, lineAm;
let highestL, highestR, highestT, highestB;

const fs = require("fs");
fs.readFile("AdventOfCode8.txt", (err, data) => {
    if(err) throw err;
    input = Array.from(data.toString().split(/\r?\n/));
    columnAm = input[0].length;
    lineAm = input.length;
    total = columnAm*lineAm;
    invisible=0;
    visible= (columnAm*2)+(lineAm*2)-4;
    for(i=1; i<lineAm-1; i++){
        for(j=1; j<columnAm-1; j++){
            highestT=0;
            highestB=0;
            highestL=0;
            highestR=0;
            highestT=0;
            for(k=0; k<j; k++){
                if(highestL<input[i][k])highestL=input[i][k];
            }
            for(k=columnAm-1; k>j; k--){
                if(highestR<input[i][k])highestR=input[i][k];
            }
            for(k=0; k<i; k++){
                if(highestT<input[k][j])highestT=input[k][j];
            }
            for(k=lineAm-1; k>i; k--){
                if(highestB<input[k][j])highestB=input[k][j];
            }
            if(input[i][j] <= highestB && input[i][j] <= highestT && input[i][j] <= highestL && input[i][j] <= highestR){
                    invisible++;
                    }
            else visible++;
        }
    }


console.log(`visible = ${visible} \ninvisible = ${invisible}`);
if(visible+invisible==total)console.log(`Which makes sense, because the total is ${total}.`);
else console.log(`Which does not make sense, because the total is ${total}.`);
});