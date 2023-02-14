function sum(){
    let num = [];

    while(true){
        let value = prompt("Enter number", '');
        if(value === '' || value === null || !(isFinite(value))) break;
    }

    num.push(+value);

    let sum = 0;

    for(let i in num){
        sum += i;
    }
    return sum;
}
console.log(sum());
