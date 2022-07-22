let capitals = ['Sofia',"Washington",'London']
//we can use for loop
//we use exclusive comparison with i<capitals.length

for(let i = 0;i<capitals.length;i++){
    console.log(capitals[i])
}

//for-of Loop cannot access the current index and it iterates through all elements in array
let arr = [10,20,30,40];
for (let el  of arr) {
    console.log(el);
}

//The forEach() method executes a provided function once for each array element.
let testArr = [1,2,3,4,5]
testArr.forEach(element =>console.log(element))

