function isPrime(n){
    if(n == 1 || n == 0){
        return false;
    }
    for(let i = 2; i < n; i++){
        if(n % i == 0){
            return false;
        }
    }return true;
}
let num = 10;
for(let i = 1; i <= num; i++){
    if(isPrime(i)){
        alert(i);
    }
}