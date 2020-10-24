const promiseFn = () => {
    console.log('1');
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Hello In set Time Out');
            resolve('Hi Function')
        }, 200);
    });

}

promiseFn().then(data => { console.log(`In fn ${data}`) });

/************************************************************************************************************** */


const promise1 = () => {
   return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Promise1_data');
        }, 3000);
    })
};
const promise2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Promise2_data');
        }, 1000);
    })
}
const promise3 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Promise3_data');
        }, 2000);
    })
}

const allPromises = () => {
    Promise.all([promise1(), promise2(), promise3()]).then((data) => {
        console.log(`data1--->${data[0]}`);
        console.log(`data2-->${data[1]}`);
        console.log(`data3--->${data[2]}`);

    });
}

const racePromise = () => {
    Promise.race([promise1(), promise2(), promise3()]).then((data) => {
        console.log(`data1--->${data}`);
    });
}


let seqPromise = async () => {
    const data1 = await promise1();
    console.log(data1);
    const data2 = await promise2();
    console.log(data2);
    const data3 = await promise3();
    console.log(data3);

}

allPromises()

