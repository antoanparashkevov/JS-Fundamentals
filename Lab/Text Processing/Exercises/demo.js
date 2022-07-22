// strings are sequences of characters
// like arrays, they have a length property
let name1 = 'Antoan';
let name2 = ['A','n','t','o','a','n']
console.log(name1.length)
console.log(name2.length)

//strings are immutable sequences of characters. We can't change the strings by indexing
let dirName = "John"
dirName[1] = "R"//it can't change the string
console.log(dirName)
let name3 = 'Nadia';
name3 = "Tony"//but it can change it like this
console.log(name3)
let ch = name3[2];//n
ch = name3.charAt(3);//y
console.log(ch)

//string can also be iterated using for-of
let str = 'Antoan'
str +="!"
console.log(str)

let strSentence = "I am JavaScript developer";
console.log('Index:',strSentence.indexOf("Java"))//where we find the first occurrence
console.log('Index:',strSentence.indexOf("java"))//it returns false ( -1 ) if the string doesn't exist (case sensitive)
console.log('Index:',strSentence.lastIndexOf("o"))//where we find last occurrence
console.log("Include or not:",strSentence.includes('Java'))
console.log("Include or not:",strSentence.includes('java'))

let sub = strSentence.substring(1,3);//this is method who will return from start index to end index(excluded)
console.log(sub);
//substring is just like splice method who se used on arrays manipulating
let sub2 = strSentence.slice(1,3)
console.log(sub2)

//the difference is that we can change tha position with substring but not it slice
let sub3 = strSentence.substring(7,3);//returns the opposite (from 3 to 7)
let sub4 = strSentence.slice(7,3)
console.log(sub3)
console.log(sub4)//no output
//we have another method instead of substring(). Named substr() and it accepts start index and length
//(how many characters we want to take)
//SUBSTR() METHOD WAS DEPRECATED
let sub5 = strSentence.substring(3,-7)//it accept that negative numbers are zero and it returns the opposite (from 0 to 3)
let sub6 = strSentence.slice(3,-7)//it returns the opposite from 3 and 7 steps from end to start
console.log(sub5)
console.log(sub6)
//that is these two differences.

let text = "hello, software university!"
let test = 'hello'
let test1 = 'antoan'
let newText= text.replace(test,test1)//replace first occurrence of the 'hello' word
console.log(newText)

let text2 = "hello, software university! hello again"
let newtext2= text2.replace(/hello/g,'antoan')//replace all occurrences by regex
console.log(newtext2)
//with regex we can deal with this problem

let todo = "ha".repeat(15);//repeats 'ha' string fifteen times.
console.log(todo)

let txt = "I Love Banana";
console.log("Include or not:",txt.includes("Banana"))//boolean expression

let greet = "Hello, ";
let nameN = "Nadia";
let result = greet.concat(nameN)//this is special method for concatenating strings 
console.log(result)
//or by concatenating with '+' sign
result = greet + nameN//it is the same result (concatenating)
console.log(result)
//it is the same like concat method.


let whitespace1 = "     Annoying spaces    "
console.log(whitespace1.trim())//removes white space at the beginning and at the end

//tabulation
let whiteSpace2 = "   \n  \t\t   some text \t\r"
console.log(whiteSpace2)

let whitespace3 = "     Annoying spaces    "
console.log(whitespace3.trimStart())//removes white-spaces only at the beginning
console.log(whitespace3.trimEnd())//removes white-spaces only at the end

let sometxt = "My name is John"
console.log("Starts or not with My:",sometxt.startsWith('My'))
console.log("Ends or not with John:",sometxt.endsWith('John'))
console.log("Ends or not with john:",sometxt.endsWith('john'))

let sometxt2 = "010"
//padStart() and padEnd() are adding to the current string another substring at the start or at the end
//until the givven length of the string is reached
console.log(sometxt2.padStart(8,'0'))//the goal is 8 length and until it reached it, adds zeroes at the beginning
console.log(sometxt2.padEnd(8,'0'))//the goal is 8 length and until it reached it, adds zeroes at the end
console.log(sometxt2.padStart(3,'0'))//the goal is 3 length and until it reached it, adds zeroes at the beginning
console.log(sometxt2.padStart(4,'0'))//the goal is 4 length and until it reached it, adds zeroes at the beginning
console.log(sometxt2)//it doesn't change the variable, it returns only.
