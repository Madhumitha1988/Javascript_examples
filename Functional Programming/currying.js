// Currying with function ->BREAKING FUNCTION THAT ACCEPTS SINGLE ARGUMENT
function fn1(a) {
    return function fn2(b) {
        return function fn3(c) {
            return a * b * c;
        }
    }
}

fn1(5)(2)(3)


// Currying using bind
function multiply(a, b, c) {
    console.log(`a-> ${a} b->${b} c->${c}`)
    return a * b * c;
}

const mult1 = multiply.bind(this, 5);
const mutl2 = mult1.bind(this, 2);
const mult3 = mutl2.bind(this, 3);


//CURRING ->Breaking fn that accepts one arg
mutl2(8); //a-> 5 b->2 c->8
mult3(); //a-> 5 b->2 c->3



//PARTIAL APPLICATION ->binding one argument , so rest of fn can be used later
const mult1 = multiply.bind(this, 5);
mult1(2,4)


