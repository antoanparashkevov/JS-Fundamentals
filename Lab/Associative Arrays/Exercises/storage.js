function storage(input) {
    let result = new Map();
    for (let line of input) {
        let [product, quantity] = line.split(' ');
        quantity = Number(quantity);

        if(result.has(product)){
            let existing = result.get(product);//take the value
            result.set(product,existing+quantity)
        }else{
            result.set(product,quantity)
        }
    }
    // console.log(result)
    for([product,quantity] of result){
        console.log(product,'->',quantity)
    }
}

storage(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40']
)
