var comp = function(fArray) {
    return function(n) {
        fArray.forEach(function(f) {
            n = f(n);
        });
        return n;
    };
};

console.log(comp([Math.sqrt, Math.sqrt, Math.sqrt])(390625));
console.log(comp([Math.sqrt, Math.sqrt])(16));
console.log(comp([Math.sqrt])(16));
console.log(comp([])(16));