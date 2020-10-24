import login from './login.js'
import shopping from './shopping.js'

let button = document.getElementById('login');
alert(button);
button.addEventListener("click", loginFn);
alert('In index fn')


function loginFn(){
    alert('In login fn')
    let loggedInStatus = login(true);

   if (loggedInStatus) {
        let products = shopping();
        document.getElementById("products").innerText = products;
    }
    else {
        console.log('Please_Login')
    }

}
 