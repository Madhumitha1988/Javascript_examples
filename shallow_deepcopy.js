const person ={
    name:'person',
    work:'home'
}

const obj={
    name:'Madhu',
    age:'30',
    person:person
}

console.log(`Original obj -> ${obj.name} ${obj.person.name}`);

const shallowCopy={...obj};
shallowCopy.person.name="Mitha";

console.log(`shallow obj -> ${shallowCopy.name} ${shallowCopy.person.name}`);
console.log(`Original obj -> ${obj.name} ${obj.person.name}`);


const deepCopy=JSON.parse(JSON.stringify(obj));
deepCopy.person.name="Deep Copy";

console.log(`deep obj -> ${deepCopy.name} ${deepCopy.person.name}`);
console.log(`Original obj -> ${obj.name} ${obj.person.name}`);





