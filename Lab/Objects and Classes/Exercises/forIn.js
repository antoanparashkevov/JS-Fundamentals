//Bespite we can loop through all keys of one object, we can loop with some different method
// it iterates over all enumerable properties
let object = {
    a:1,
    b:2,
    c:3
}
for (const key in object) {
    console.log(`${key} => ${object[key]}`)
}

//hasOwnProperty returns Boolean expression that says if the property of the current object exist
let obj = {
    name: "Antoan",
    age:'28'
}
console.log(obj.hasOwnProperty('name'))