// var a=10;
// var b=20;

// var operator="+";

// function value(val1,val2,op){
//     if(op=="+"){
//         return val1+val2;
//     }

//     else if (op=="-"){
//         return val1+val2;
//     }

//     else {
//         console.log("invalid operator")
//     }
   

// }

// var sum=value(a,b,operator);

// console.log(`Result 1: ${a} ${operator} ${b} = ${sum}`);

//  operator="-";
//  let sub= value(a, b, operator);
// console.log(`Result 2: ${a} ${operator} ${b} = ${sub}`);


function sumtwonumber(x,y){
    return x+y;
}

var resultarr = [];

for(let i=0;i<10;i++){
    let res=sumtwonumber(i,2*i);
    resultarr.push(res);
}

console.log(resultarr);