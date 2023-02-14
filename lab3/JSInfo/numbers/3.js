function readNumber(){
    let num;
    do{
        num = prompt("Enter number", 0);
    }
    while(!isFinite(num));

    return +num;
}
let ans = readNumber();
console.log(ans);