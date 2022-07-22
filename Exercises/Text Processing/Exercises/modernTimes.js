function modernTimes(string) {
    let words = string.split(' ')
    for (let word of words) {
        if (word.startsWith('#') && word.length > 1) {
            let asciiCode = word.charCodeAt(1)
            let isLetter = (asciiCode >= 65 && asciiCode <= 90) || (asciiCode >= 97 && asciiCode <= 122)
            if (isLetter) console.log(word.substring(1))
            // console.log(asciiCode)
        }
    }
}

modernTimes('Nowadays everyone uses # to tag a #special word in #socialMedia')
