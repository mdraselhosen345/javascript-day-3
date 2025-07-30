//--------1---------
// for(let i=1; i<=60; i++){
//     console.log("daily 6 hour study");
// }


//    Find all the odd numbers 
// for(let i= 1; i<=20; i++){
//     if(i%2 !==0){
//         console.log(i);
//     }
// }


// for(let i = 1; i<= 20; i += 2){
//     console.log(i);
// }
// for(let i = 61; i <= 100; i+=2){
//     console.log(i)
// }

//Find all the even numbers
// for(let i = 78; i <= 98; i++){
//     if(i%2 ===0);
//     console.log(i)
// }
// for(let i = 1; i <= 20; i++){
//    if(i % 2===0);
//    console.log(i)
// }

// let sum = 0;

// for(let i=91; i <=129; i += 2){
//      sum +=i;
// }
// console.log("sum of odd numbers from 91 to 129is:" +sum);

// let sum = 0;

// for(let i=1; i<=20; i++){
//     if(i % 2 !==0){
//         sum +=i;
//     }
// }
// console.log("sum of odd numbers from 1 to 20 is :" +sum);

// let sum = 0;
// for(let i=51; i<=85; i++){
//     if(i%2 === 0){
//         sum +=i
//     }
// }
// console.log("sum of odd numbers from 51 to 85 is:"+sum);


// Generate a multiplication table for number 1
// let number = 1;
// for(let i=1; i<=10; i++){
//     console.log(number + "x"+i+"="+(number*i));
// }
// let number = 9;
// for(let i=1; i<=10; i++){
//     console.log(number+"x"+i+"="+number*i);
// }
// Implement a countdown timer that counts down from 100 to 1;

// let count = 100;
// let timer = setInterval(function(){
//     console.log(count);
//     count--;
//     if(count < 1){
//         clearInterval(timer);
//     }
// },1000);
    
let count = 1;
let timer = setInterval(function(){
    console.log(count);
    count++;
    if(count > 100){
        clearInterval(timer);
    }
},1000);
    
