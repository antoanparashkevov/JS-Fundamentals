function simpleCalculator(num1,num2,action){

    function multiply(){
        return  num1*num2
    }
    function divide(){
        return num1/num2
    }
    function add(){
        return num1+num2
    }
    function subtract(){
        return num1-num2
    }
   switch (action){
       case 'multiply':
           console.log(multiply())
           break;
       case 'divide':
           console.log(divide());
           break;
       case 'add':
           console.log(add());
           break;
       case 'subtract':
           console.log(subtract());
           break;
   }

}
simpleCalculator(
    5,
    5,
    'subtract'
)
