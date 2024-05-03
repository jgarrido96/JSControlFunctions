
let login = true

let weirdStore = [["apples", 3.99], ["milk", 5.99], ['cigarettes', 8.50], ['engine', 4500]]





if (login == true){
    console.log("You are logged in!");
    let cart = [];
    for (let item in weirdStore){
        console.log(weirdStore[item]);
        };
    function add() {
        do {
            userItems = prompt("What would you like to add to your cart? 0 to break")
            if (userItems != 0){
                cart.push(userItems)
            }
        } while (userItems != 0)
    }
    add();
    console.log(`Your cart: ${cart}`);
    let totalPrice = 0
    for (let i in cart){
        for (let item in weirdStore) {
            if (cart[i] == weirdStore[item][0]){
                totalPrice += weirdStore[item][1]
                console.log(`${cart[i]} costs $${weirdStore[item][1]}`)
            }
        }
    }
    console.log(`Your total: $${totalPrice}`)
}
else(console.log("You are not logged in :("))

