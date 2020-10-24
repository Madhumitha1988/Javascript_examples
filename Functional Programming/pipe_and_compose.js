const pipe = (fn1, fn2) => (...data) => fn1(fn2([...data]))
const compose = (fn1, fn2) => (...data) => fn2(fn1([...data]))


function fn1(data) {
    //console.log(`Function 1 ${data}`)
    return data + ' from function 1';
}

function fn2(data) {
   // console.log(`Function 2 ${data}`)
    return data + ' from function 2'
}

pipe(fn1, fn2)('hello');  //hello from function 2 from function 1
compose(fn1,fn2)('Bye');  //Bye from function 1 from function 2

