let noStr = "name";
console.log(noStr.split()) //this will convert string to array
console.log(noStr.split(''))//this will return character array with our separator ''
console.log(noStr.split('').reverse())//this reverse only ARRAYS
console.log(noStr.split('').reverse().join(''))//this convert it from ARRAY to String again



let arr = ['name','age','year']
console.log(arr.join(' '))//this convert from array to string with space separator
console.log(arr.join(', '))//this convert from array to string with comma and space separator
