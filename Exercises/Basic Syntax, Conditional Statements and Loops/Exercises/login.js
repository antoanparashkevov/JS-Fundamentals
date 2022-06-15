// function login(input) {
//     let userName = input[0];
//     let count = 0;
//     for (let i = 1; i < input.length; i++) {
//         if (count === 3) {
//             console.log(`User ${userName} blocked!`);
//             break;
//         }
//         // console.log(input[i]);
//         // console.log(i);
//
//         let reverseString = input[i];
//         reverseString = reverseString.split('') //this divides a string into an ordered list
//         //for example: login --> ['l','o','g','i','n']
//         // console.log(reverseString)
//         reverseString = reverseString.reverse(); //this reverses only strings. The first element of an array becomes last.
//         //for example: ['l','o','g','i','n'] --> ['n','i','g','o','l']
//         // console.log(reverseString)
//         reverseString = reverseString.join('')//this concatenates all elements of an array
//         //for example with join(''): ['n','i','g','o','l'] --> nigol
//         //for example with join(): ['n','i','g','o','l'] --> n,i,g,o,l
//         // console.log(reverseString)
//
//         if(reverseString !== userName){
//             console.log(`Incorrect password. Try again.`);
//         }else{
//             console.log(`User ${userName} logged in.`);
//             break;
//         }
//         count++;
//     }
//
//
// }
//
// login(['Acer', 'login', 'go', 'let me in', 'recA'])


function login(input) {
    let userName = input[0];
    let count = 0;
    for (let i = 1; i < input.length; i++) {
        if (count === 3) {
            console.log(`User ${userName} blocked!`);
            break;
        }
        if (userName === input[i].split('').reverse().join('')) {
            console.log(`User ${userName} logged in.`);
            break;
        } else {
            console.log(`Incorrect password. Try again.`);
        }
        count++;
    }
}

login(['Acer', 'login', 'go', 'let me in', 'recA'])

