function classStorage(){
    class Storage {
        constructor(capacity) {
            this.capacity = capacity;
            this.storage = [];
            this.totalCost = 0;
        }

        addProduct(product) {
            this.capacity -= product.quantity;//because we must subtract from capacity to quantity
            this.totalCost += product.quantity * product.price;
            this.storage.push(product);
        }

        getProducts() {
            //because storage is array
            return this.storage.map((product) => JSON.stringify(product)).join('\n')
        }
    }

    let productOne = {name: 'Cucamber', price: 1.50, quantity: 15};
    let productTwo = {name: 'Tomato', price: 0.90, quantity: 25};
    let productThree = {name: 'Bread', price: 1.10, quantity: 8};
    let storage = new Storage(50);
    storage.addProduct(productOne);
    storage.addProduct(productTwo);
    storage.addProduct(productThree);
    console.log(storage.getProducts());
    console.log(storage.capacity);
    console.log(storage.totalCost);

    // console.log(`This is our instance made from class template`, storage)
    // console.log(`Our Array of objects`, storage.storage);
    // console.log(`Our capacity`, storage.capacity);
    // console.log(`Our totalCost`, storage.totalCost);

}
classStorage()
