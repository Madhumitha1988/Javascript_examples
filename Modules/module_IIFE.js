//Earlier IIFE used for modules 
//<SCRIPT> 
var script1 = (function fn3() {
    var z = 1;
    console.log('In Immediately invoked function expression');
    function happy() {
        console.log('Iam happy inside iife');
    }
    return {
        happy: happy,
        //z:z 
}
}())

script1.happy();
//</SCRIPT>
