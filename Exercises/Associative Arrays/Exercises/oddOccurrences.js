function oddOccurrences(string) {
    //convert the string into input
    let words = string.split(' ');
    let result = {}
    // console.log(words)
    //for every element of input array
    for (let word of words) {
        // - count word as lowercase
        word = word.toLowerCase()

        if (result.hasOwnProperty(word)) {
            result[word]++;
        } else {
            result[word] = 1;
        }
    }
    // console.log(result);

    // filter only words that occur once and odd number of times.
    let filtered = Object.entries(result).filter(([words, count]) => {
        // console.log(count)
        return count % 2 === 1;
    })
    // print list of words
    let keys = filtered.map(entry => entry[0])//return only keys
    console.log(keys.join(' '))

    //in JAVASCRIPT normal objects arranges the keys by putting the numbers first and sorting them by size
    //that's why our output is 1 5 c# php
    //we must use Map() instead of normal object



}

oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')
