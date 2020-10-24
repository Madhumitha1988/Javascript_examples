//Ability to replace expression with resulting value without changing result of program

function a(num1, num2) {
    return num1 + num2;
}

function b(num) {
    return num * 2;
}

b(7);
b(a(3, 4));