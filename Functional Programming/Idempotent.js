function notIdempotent(name) {
    function Model() {
        this.name = name;
    }
    return Model;
}

var User = notIdempotent('user');
var User1 = notIdempotent('user');

console.log(User != User1); //same input different output


var collection={}
function idempotent(name){
    if(collection[name]){
        return collection[name]
    }
    function Model(){
        this.name=name;
    }
    collection[name]=Model;
    return collection[name];
}

var User = idempotent('user');
var User1 = idempotent('user');

console.log(User === User1); //same output for same output - number of times


/*IN REST - GET request is IDEMPOTENT -> can run any no of times same output*/

/*IN REST - POST request is NON-IDEMPOTENT. 
            run any number of times different output .
            POSTing same msg agagin and again, new msg sent and stored in the database every time.*/