function rounding(number,precision){
 number = Number(number);
 precision = Number(precision);

 if(precision >=15){
     precision = 15;
 }
 number = number.toFixed(precision);
 console.log(parseFloat(number));

 //parseFloat removes trailing zeroes

}
rounding(3.1415926535897932384626433832795,2)
