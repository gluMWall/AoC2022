let i, j, k;
let input, inputArr, result, comparison;


const fs = require("fs");
fs.readFile("AdventOfCodeInput6.txt", (err, data) => {
    if(err) throw err;
    input = String(data.toString());
    


    /* Solution To The First Part
for(i=0; i<input.length; i++){

    inputArr = [input[i], input[i+1], input[i+2], input[i+3]];
    for(j=0; j<inputArr.length; j++){

        for(k=(j+1); k<inputArr.length; k++){
            if(inputArr[j]==inputArr[k]){
                comparison = 0;
                break;
            }
            else {
                result = i+1;
                comparison = 1;
            }
        }
        
        if(comparison==0)break;
    }
    if(comparison!=0) break;
    
}

console.log(i+4);
console.log(input[i], input[i+1], input[i+2], input[i+3]);
*/

//Solution To The Second Part

for(i=0; i<input.length; i++){
    inputArr = [];
    for(j=0; j<14; j++){
        inputArr.push(input[i+j]);
    }
    
    for(j=0; j<inputArr.length; j++){

        for(k=(j+1); k<inputArr.length; k++){
            if(inputArr[j]==inputArr[k]){
                comparison = 0;
                break;
            }
            else {
                result = i+1;
                comparison = 1;
            }
        }
        
        if(comparison==0)break;
    }
    if(comparison==1) break;
    
}

console.log(i+14);
for(j=0; j<14; j++){
console.log(input[i+j]);
}

});

