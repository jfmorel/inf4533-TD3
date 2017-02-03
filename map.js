var map = function(array, f) {
    return array.map(function(item) {
        return f(item);
    });
};

console.log(map([1, 4, 16], Math.sqrt));