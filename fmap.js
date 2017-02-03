var fmap = function(fArray, n) {
    var output = '';
    fArray.map(function(f) {
        output += f(n) + ', ';
    });
    console.log(output.slice(0, -2));
};

fmap([Math.sqrt, function(x){return x + 1;}], 4);