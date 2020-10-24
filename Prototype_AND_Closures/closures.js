function outerfn(){
    let a='hello';
    return ()=>{
        console .log('It returns variable a of outer fn'+a);
    }
}

let fn1=outerfn();
fn1();


//outer fn returns a value ; ideally a has to be deleted from heap as the call is completed
//but 'a' is stored in spl memory closures since it is referenced by outer function



function fibonocciMemoization(){
    let cache=[]
    return function fibanooci(n){
        if(cache[n]){
            return cache[n];
        }
        else{
            if(n<=1){
                return n;
            }
            else{
                cache[n]=fibanooci(n-1)+fibanooci(n-2);
                return cache[n];
            }
        }
    }
}


fibonocciMemoization()(3)