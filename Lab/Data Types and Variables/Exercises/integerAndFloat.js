function integerToFloat(a, b, c) {
    let sum = a + b + c;
    let sumAsString = String(sum);
    let type = "Integer"
    for (let i = 0; i < sumAsString.length; i++) {
        if (sumAsString[i] === ".") {
            type = "Float";
            break;
        }
    }
    console.log(`${sum} - ${type}`)
}
integerToFloat(1, 2, 3)
integerToFloat(1, 2, 3.14)

console.log(`Second Way`)
function integerToFloat2(a,b,c){
    let sum = a+b+c;
    let type = "Integer";
    let roundedSum = Math.round(sum);
    if(roundedSum!==sum){
        type = "Float"
    }
    console.log(`${sum} - ${type}`);
}
integerToFloat2(1, 2, 3)
integerToFloat2(1, 2, 3.14)

console.log(`Third Way`)

function integerToFloat3(a,b,c){
    let sum = a+b+c;
    let type = "Integer";

    if(sum%1!==0){
        type = "Float"
    }
    console.log(`${sum} - ${type}`);
}
integerToFloat3(1, 2, 3)
integerToFloat3(1, 2, 3.14)




