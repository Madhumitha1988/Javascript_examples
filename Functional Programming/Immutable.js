const obj= {name:'Britney'};

function clone(obj){
    return {...obj}; //this is pure
}
obj.name='joe'  //Mutable

//Better code ->immutable object
function updateObj(obj){
    const newObj= clone(obj);
    newObj.obj='JOE';
    return newObj;
}