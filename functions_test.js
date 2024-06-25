const repeats = 5;

function hello_world(a) {
    return "Hello World! ".repeat(a);
};
console.log(hello_world(repeats));

var hello_world = function(a) {
    return "Hello World! ".repeat(a);
};
console.log(hello_world(repeats));

function hoist() {
    return f;
    function f(a) {
        return "Hello World! ".repeat(a);
    };
};
console.log(hoist()(repeats));


hello_world = (a) => {
    return "Hello World! ".repeat(a);
};
console.log(hello_world(repeats));

hello_world = (a, ...args) => {
    return "Hello World! ".repeat(a) + args.join(" ");
};
console.log(hello_world(repeats, "And others"));

