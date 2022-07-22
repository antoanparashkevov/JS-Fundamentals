//sort function sorts the items of an array. Function or method are the same things
let nums = [20,30,10,30,100,5]
nums.sort((a,b)=>a-b)//comparing two elements, two template elements
//this template is ascending
console.log(nums);
let nums2=[10,20,60,50,20,100,200]
nums.sort((a,b)=>b-a)//descending
console.log(nums2)

//localCompare() method is used to compare any two characters without regard for the case used.
//for example, in ASCII table, the letter starting with uppercase is before the letter starting with lowercase
let words = ['nest','Eggs','bite','Grip','jAw'];
words.sort((a,b)=>a.localeCompare(b));
//localCompare() method sorts strings in alphabetical order.
console.log(words)//this will sort in alphabetical order.
