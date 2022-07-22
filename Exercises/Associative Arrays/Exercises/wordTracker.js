function wordTracker(input) {
    //-- parse input - take first element and split it by space
    let sentence = input.shift().split(' ');
    // console.log(sentence);
    let result = {};

    //-- iterate the rest elements.
    // for (let word of sentence) {
    //     result[word] = 0
    // }
    //OR
    sentence.forEach((word)=>(result[word] = 0))

    // console.log(result)
    //increase the counter by 1 for all input elements.
    for (let word of input) {
        if (result.hasOwnProperty(word)) {
            // result[word] += 1;
            result[word]++;
        }
    }
    // console.log(result)
    //- if the current element is one of the words that we finding, increase the counter by 1.
    //- skip the rest words.
    let sorted = Object.entries(result)
    // console.log(sorted)

    sorted.sort((a,b) =>b[1] - a[1])

    // console.log(sorted)
    //we use destructuring
    for(let [word,counter] of sorted){
        console.log(`${word} - ${counter}`)
    }

    //convert the object to array
    //sort by value
    //print the result
}

wordTracker([
        'this sentence',
        'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
    ]
)
