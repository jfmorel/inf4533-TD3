var compose = function(f, g) {
    return function(n) {
        console.log(f(g(n)));
    };
};

compose(Math.sqrt, Math.sqrt)(16);
