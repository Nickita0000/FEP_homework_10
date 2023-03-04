function Hamburger(size) {
    this.price = size.price
    this.callories = size.callories
}
Hamburger.prototype.addTopping = function (toppingName) {
    this.price += toppingName.price
    this.callories += toppingName.callories
}

Hamburger.prototype.getPrice = function () {
    return this.price
}

Hamburger.prototype.getCallories = function () {
    return this.callories
}

Hamburger.SIZE_SMALL = {
    price: 50,
    callories: 30
}
Hamburger.SIZE_MEDIUM = {
    price: 75,
    callories: 30
}
Hamburger.SIZE_LARGE = {
    price: 100,
    callories: 40
}

Hamburger.TOPPING_MAYO = {
    price: 20,
    callories: 5
}
Hamburger.TOPPING_FRIES = {
    price: 15,
    callories: 20
}
Hamburger.TOPPING_SALAD = {
    price: 20,
    callories: 5
}
Hamburger.TOPPING_CHEESE = {
    price: 10,
    callories: 20
}
Hamburger.TOPPING_HERBS = {
    price: 15,
    callories: 0
}

const hamburger = new Hamburger(Hamburger.SIZE_SMALL);

hamburger.addTopping(Hamburger.TOPPING_MAYO);
hamburger.addTopping(Hamburger.TOPPING_FRIES);
hamburger.addTopping(Hamburger.TOPPING_FRIES);
hamburger.addTopping(Hamburger.TOPPING_CHEESE);

console.log(`Price with sauce: ${hamburger.getPrice()} tugricks`);
console.log(`Callories with sauce: ${hamburger.getCallories()} call`);