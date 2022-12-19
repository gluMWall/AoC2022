let i, j, k, l, last;
let input, dirNames, result, queueArr, action, active, counter, index, sum;
let dirs =[];
let subs = [];
dirNames = [];
let counterArr=[];
let parentArr=[];
let regex;



const fs = require("fs");
fs.readFile("AdventOfCodeInput7.txt", (err, data) => {
    if(err) throw err;
    input = Array.from(data.toString().split(/\r?\n/));
    queueArr = input;
    input = queueArr;
    active=-1;
    length=input.length;


    function Read(line){
        regex = /(?<=cd )\D+/;
        if(regex.test(line)){
            action = 1;
            return;
            }

        regex = /\bls\b/;
        if(regex.test(line)){
            return;
        }

        regex = /\d{1,10} \D+/;
        if(regex.test(line)){
            action = 2;
            return;
        }

        regex = /dir \D+/;
        if(regex.test(line)){
            action = 3;
            return;
        }

    };

    for(i=0; i<length; i++){
        Read(queueArr[i]);
        if(action==1){
        regex = /\../;
        if(regex.test(queueArr[i])){
        
        
        
        }
        else {
        active++;
        dirs[active]=0;


        }

        }
        else if(action==2){
        
        regex = /\d+/;
        dirs[active]+=Number(regex.exec(queueArr[i]));


        }

        else if(action==3){
            regex= /(?<=dir )\D+/;
            dirNames.push(String(regex.exec(queueArr[i])));
        }
        action = null;
    }

    regex = /cd \D+/;
    subs = queueArr.filter(element => regex.exec(element));


    console.log(dirs);
    regex = /cd [a-z, /]+/;
    
    l=0;
    counter = 0;
    index =1;
    j=0;
    for(i=0; i<subs.length; i++){
        if(regex.test(subs[i])){             
            j++;
            counter++;
            counterArr.push(counter);
        }
        
        else {
            l++;
            counter--;
        }
        k=j-1;
    }

    j=0;
    for(j=counterArr.length-1; j>=0; j--){
        for(k=j-1; k>=0; k--){            
            if(k==j-1)last = counterArr[j];
            if(counterArr[k]<counterArr[j] && (counterArr[k]==(last-1))){
                last = counterArr[k]-1;
                dirs[k]+=dirs[j];
            }
            else {

            }

        }



    }

    // Solution To The First Part
    sum=0;
        for(i=0; i<dirs.length; i++){
        if(dirs[i]<=100000)sum+=dirs[i];
        }
    

   
    console.log(dirs);
    console.log(counterArr);
    console.log(sum);
});