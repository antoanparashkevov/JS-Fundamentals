function problem(data) {
    let pattern = /(U\$)(?<username>[A-Z][a-z]{2,})(\1)(P@\$)(?<passwd>[a-z]{5,}[0-9]+)(\4)/
    let n = +data.shift()
    // console.log(n)
    let counter = 0;
    while (n > 0) {
        n--;
        let passwd = data.shift()
        // let match = passwd.match(pattern)
        let test = pattern.test(passwd)
        // console.log(test)
        if (test) {
            counter++
            console.log('Registration was successful')
            let match = passwd.match(pattern)
            console.log(`Username: ${match.groups.username}, Password: ${match.groups.passwd}`)
            // console.log(match.groups.username)
            // console.log(match.groups.passwd)
        } else {
            console.log(`Invalid username or password`)
        }
    }
    console.log(`Successful registrations: ${counter}`)
}
//
// problem(
//     ["3",
//         "U$MichaelU$P@$asdqwe123P@$",
//         "U$NameU$P@$PasswordP@$",
//         "U$UserU$P@$ad2P@$"]
// );
// problem(["2",
//     "U$TommyU$P@$asdqwe123P@$",
//     "Sara 1232412"])
problem(["3",
    "U$myU$-->P@$asdqwe123P@$",
    "Sara 1232412",
    "U$NameU$P@$Pass234P@$"])
