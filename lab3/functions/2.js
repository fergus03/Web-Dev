function checkAge(n){
    return (n > 18) ? true : confirm("Did parents allow you?");
}

function checkAge1(n){
    return (n > 18) || confirm("Did parents alloe you?");
}