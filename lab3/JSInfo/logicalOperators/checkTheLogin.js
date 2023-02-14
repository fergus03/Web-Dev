let username = prompt("Who is there?");

if(username == 'login'){
    let password = prompt("Type password");
    if(password == 'TheMaster'){
        alert("Welcome!");
    }
    else if(password == '' || password == null){
        alert("Canceled");
    }
    else{
        alert("Wrong Password!");
    }
}
else if(username == '' || username == null){
    alert("Canceled");
}
else{
    alert("I dont know you");
}