function passwordReset(data) {
    let password = data.shift()//data[0]
    let line = data.shift()//TakeOdd
    while (line !== "Done") {
        //with destructuring
        let [command, first, second] = line.split(' ')
        let temporaryPassword = '';
        if (command === "TakeOdd") {
            for (let i = 0; i < password.length; i++) {//0
                if (i % 2 === 1) {//Odd 1,3,5,7,9 and etc
                    temporaryPassword += password[i]
                }
                // console.log(temporaryPassword)
            }
            // console.log(temporaryPassword)
            password = temporaryPassword
            console.log(password)
        } else if (command === "Cut") {
            let inx = Number(first)
            let length = Number(second)
            let substring = password.substring(inx, inx + length)//from fifteen to eighteen
            password = password.replace(substring, '')
            console.log(password)
        } else if (command === "Substitute") {
            temporaryPassword = password;
            while (temporaryPassword.includes(first)) {
                temporaryPassword = temporaryPassword.replace(first, second)
            }
            if (password.includes(first)) {
                console.log(temporaryPassword)
            } else {
                console.log('Nothing to replace!')
            }
            password = temporaryPassword
        }
        line = data.shift()
    }
  console.log(`Your password is: ${password}`)

}

passwordReset((["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
    "TakeOdd",
    "Cut 15 3",
    "Substitute :: -",
    "Substitute | ^",
    "Done"])
)
