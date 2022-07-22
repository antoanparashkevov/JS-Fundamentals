function passwordGenerator(data) {
    let vowels = ['a', 'e', 'i', 'o', 'u']
    let [firstStr, secondStr, thirdStr] = data
    let concatenateString = firstStr+secondStr
    console.log(thirdStr)
    let vowelIndex = 0;
    let password = ''
    thirdStr = thirdStr.toLowerCase()
    for(let i = 0;i<concatenateString.length;i++){
        if(vowels.includes(concatenateString[i])){
            let indexOfCharFromThirdStr = vowelIndex%thirdStr.length;
            let currentChar = thirdStr.charAt(indexOfCharFromThirdStr);
            password+=currentChar.toUpperCase()
            vowelIndex++;
        }else{
            password+=concatenateString[i]
        }
    }
    console.log(`Your generated password is ${password.split('').reverse().join('')}`)

}

passwordGenerator
([
    'easymoneyeazylife', 'atleasttencharacters', 'absolute'
]
)

