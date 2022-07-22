let key = 'six'

//all keys can be typed without '', but if we have special symbols like : or spacing
let associativeArray = {
    'one': 1,
    "two": 2,
    "three": 3,
    [key]: 6,
    'fox-trot':10,

}
associativeArray[key] = 6;

//this is called deferring
associativeArray.five = 5;

associativeArray['four'] = 4;
associativeArray['my my my'] = 5;
console.log(associativeArray);


//this is for in loop iterate through the keys
for(let key in associativeArray){
    console.log(key + " = " + associativeArray[key])
}
console.log('------' +
    'the same like for of'+
'------')
//the same like
for(let key of Object.keys(associativeArray)){
    console.log(key)
}
console.log(associativeArray.hasOwnProperty(key))//returns boolean expression


delete associativeArray[key]//delete is operator just like break and return
console.log(associativeArray.hasOwnProperty(key))

for(let [key,value] of Object.entries(associativeArray)){
    console.log(`${key} -> ${value}`)
}
let entries = Object.entries(associativeArray)
console.log(entries)
for(let entry of entries){
    //this is destructuring (let [key,value] = entry)
    let [key,value] = entry
    console.log(key,value)
}
