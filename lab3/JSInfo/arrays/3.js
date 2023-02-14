let arr = ["a", "b"];

arr.push(function() {
  console.log( this );
});

arr[2](); // it will print two initial elemnts of array and fucntion