const user = {
    name: "Kim",
    active: true,
    cart: [],
    purchases: []
  };
  
let userHistory = [];

function addToCart(user, item) {
    userHistory.push(Object.assign({}, user, { cart: user.cart, purchases: user.purchases }));
    let cart;
    const updateCart = user.cart.concat(item);
    return {... user, cart: updateCart};

}

function taxItems(user) {
    userHistory.push(Object.assign({}, user, { cart: user.cart, purchases: user.purchases }));
    const tax = 1.4;

    let { cart } = user;
    let updatedCart = []

    cart.forEach(item => {
        updatedCart.push({ name: item.name, price: item.price * 1.4 })
    })
    return {...user, cart: updatedCart };
}
function buyItems(user) {
    userHistory.push(Object.assign({}, user, { cart: user.cart, purchases: user.purchases }));
    return {...user, purchases: user.cart };
}
function emptyCart(user) {
    userHistory.push(Object.assign({}, user, { cart: user.cart, purchases: user.purchases }));
    return {...user, cart: [] };
}

function refundItem(user, item) {
    userHistory.push(Object.assign({}, user, { cart: user.cart, purchases: user.purchases }));
    const { purchases } = user;
    const refundItem = purchases.splice(item);
    return {...user, purchases: refundItem };
}


const compose = (fn1, fn2) => (...data) => fn1(fn2(...data))

const purchaseItems = (...fns) => fns.reduce(compose);

purchaseItems(emptyCart, buyItems, taxItems, addToCart)(user, { name: 'Laptop', price: 100 });

console.log(userHistory);