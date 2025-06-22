// let max = prompt("Enter the maximum number you want");
// let random = Math.floor(Math.random()*max)+1;
// let guess= prompt("Guess the number");
// while(true){
//     if(guess=="quite"){
//         console.log("You Quite the game.");
//         break;
//     }
//     if(random==guess){
//         console.log("You have win the game!");
//         break;
//     }else{
//         guess= prompt("Try again gussing!");
//     }
// }

function numsum(n){
    let sum=0;
    for(let i=0;i<=n;i++){
        sum+=i;
    }
    return sum;
}