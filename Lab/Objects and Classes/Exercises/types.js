function increment(value){
     value +=1//it can't change the value from variable because variables are referenced types.
}
increment()

let num = 10;

increment(num)
console.log(num)

function increment2(ref){
     ref.number = ref.number + 1;//increase the value from number property by 1
}

let myObj = {
     number:5
};
increment2(myObj)//call the function and put as an argument the object who has property number
console.log(myObj)
