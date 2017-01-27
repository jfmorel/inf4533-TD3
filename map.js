function map(f, array) {
    var output = '';
    array.map(function(item) {
        output += f(item) + ', ';
    });
    console.log(output.slice(0, -2));
}

map(function(x) {return x + 1;}, [1,2,3,4,5,6]);