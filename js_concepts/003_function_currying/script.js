const multiply = function (x, y) {
    console.log(x * y);
}

multiply(2, 3);

const multiplyLater = multiply.bind(this);

console.log(multiplyLater);

const multiplyBy7 = multiplyLater(7, 12);

console.log("=================");


const multiplyClosure = function(x) {
    return function (y) {
        console.log(x * y);
    }
}

const multiplyBy5 = multiplyClosure(5);
console.log(multiplyBy5);
multiplyBy5(7);