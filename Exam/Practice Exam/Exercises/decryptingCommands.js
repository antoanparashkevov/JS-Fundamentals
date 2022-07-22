function decryptingCommands(data) {
    let message = data.shift()
    // console.log(message)
    while (data[0] !== "Finish") {
        let [command, p1, p2] = data.shift().split(' ')
        // console.log(command)
        // console.log(p1,p2)
        if (command === "Replace") {
            let pattern = new RegExp(p1, 'g')
            message = message.replace(pattern, p2)
            if(message.length>=1){
                console.log(message)
            }
        } else if (command === "Cut") {
            p1 = +p1
            p2 = +p2
            if(p1 >= 0 && p2>=0 && p1<message.length && p2<message.length) {
                let firstPart = message.substring(0, p1)
                // console.log(firstPart)
                let secondPart = message.substring(p2 + 1)
                // console.log(secondPart)
                message = firstPart + secondPart
                if(message.length>=1){
                    console.log(message)
                }
            }else{
                console.log('Invalid indices!')
            }
        }else if(command === "Make"){
            if(p1 === "Upper"){
                message=message.toUpperCase()
            }else if(p1 === "Lower"){
                message = message.toLowerCase()
            }
            if(message.length>=1){
                console.log(message)
            }
        }else if(command === "Check"){
            if(message.includes(p1)){
                console.log(`Message contains ${p1}`)
            }else {
                console.log(`Message doesn't contain ${p1}`)
            }
        }else if(command === "Sum"){
            p1 = +p1;
            p2 = +p2;
            if(p1 >= 0 && p2>=0 && p1<message.length && p2<message.length){
                let subStr = message.substring(p1,p2+1)
                subStr = subStr.split('')
                // console.log(subStr)
                let sum = 0
                for(let letter of subStr){
                    let charCode = letter.charCodeAt(0)
                    sum+=charCode;
                }
                console.log(sum)
            }else {
                console.log(`Invalid indices!`)
            }
        }
    }
}

decryptingCommands(["ILikeSoftUni",
    "Replace I We",
    "Make Upper",
    "Check SoftUni",
    "Sum 1 4",
    "Cut 1 4",
    "Finish"]);

decryptingCommands(["HappyNameDay",
    "Replace p r",
    "Make Lower",
    "Cut 2 23",
    "Sum -2 2",
    "Finish"])


