function extractEmails(data) {
    let emails = [];
    let pattern = /(\s|^)(?<email>(?<name>[0-9A-Za-z][.\-_a-zA-Z0-9]*[a-zA-Z0-9])@(?<host>[a-zA-Z]+(-[A-Za-z]+)?(\.[A-Za-z]+)+))/g
    let result = pattern.exec(data)
    while (result !== null) {
        emails.push(result.groups.email)
        // console.log(result)
        result = pattern.exec(data)
    }
    // console.log(emails)
    emails.forEach(email=>console.log(email))
}

extractEmails(['Please contact us at: support@github.com.'])
