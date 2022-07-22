function orders(product, quantity) {
    function eachProductPrice(oneProduct) {
        let eachPrice = 0;
        if (oneProduct === "water") {
            eachPrice = 1.00;
        } else if (oneProduct === "coke") {
            eachPrice = 1.40
        } else if (oneProduct === 'coffee') {
            eachPrice = 1.50
        } else {
            eachPrice = 2.00
        }
        return eachPrice;
    }
    function totalPriceEachProduct(eachProduct,quantityProduct){
        return eachProductPrice(eachProduct) * quantityProduct;
    }
    console.log(totalPriceEachProduct(product,quantity).toFixed(2))
}

orders('coffee', 2)
