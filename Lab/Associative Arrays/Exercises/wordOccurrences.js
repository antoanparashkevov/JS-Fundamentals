function wordOccurrences(input) {
    let result = new Map();
        for(let word of input){
                let wordOccurrences  = 1;//starts from 1
                if(result.has(word)){//if we already have this property
                        wordOccurrences+=result.get(word);//sum it from the value.
                }
              result.set(word,wordOccurrences);
        }
        //we want to sort in descending order by counter
        let sorted = Array.from(result)

    sorted.sort((a,b)=>b[1]-a[1])
    // console.log(sorted)
    for(let [word,counter] of sorted){
        console.log(`${word} -> ${counter} times`)
    }
}

wordOccurrences(
    ["Here",
        "is",
        "the",
        "first",
        "sentence",
        "Here",
        "is",
        "another",
        "sentence",
        "And",
        "finally",
        "the",
        "third",
        "sentence"])
