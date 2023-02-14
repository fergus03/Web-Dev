if (-1 || 0) alert( 'first' );
if (-1 && 0) alert( 'second' );
if (null || -1 && 1) alert( 'third' );

/*
The result of -1 || 0 = -1, truthy

-1 && 0 = 0, falsy

Operator && has a higher precedence than || so -1 && 1 executes first, giving us the chain:
null || -1 && 1  ->  null || 1  ->  1

*/