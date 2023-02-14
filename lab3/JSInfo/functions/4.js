function pow(a, n){
    let ans = a;

    for(let i = 1; i < n; i++){
        ans *= a;
    }
    return ans;
}

let a = prompt("x?", '');
let n = prompt("n?", '');

if (n < 1){
    alert(`error`);
}
else{
    alert(pow(a, n));
}