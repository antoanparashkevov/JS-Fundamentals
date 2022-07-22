//filter creates a new array from elements that matching the specified condition
//predicate is the condition and this returns a boolean value
let myArr = ['one','two','three','four','five'];
let longWords = myArr.filter(x=>x.length>3);
console.log(longWords);
