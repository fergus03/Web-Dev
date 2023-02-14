function checkSpam(str){
    let lowerstr = str.toLowerCase();

    return lowerstr.includes("viagra") || lowerstr.includes("xxx");
}
console.log( checkSpam('buy ViAgRA now') );
console.log( checkSpam('free xxxxx') );
console.log( checkSpam("innocent rabbit") );