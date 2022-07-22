function schoolRegisterMy(data) {
    //reduce method executes a callback function on each element of the array.
    //The final result of running the reducer across all elements of the array is a single value
    return data.reduce((a, b) => {
        //this takes last element of the array
        // return b;

        // this is an empty object if we set as a second param on 7 line an {}
        // return a
        //in this element (a) will kept the result

        let currRow = b.split(', ');
        a.push(currRow.reduce((a, b) => {
            let [key, value] = b.split(': ')
            a[key] = value
            //this will be an object with key-value pairs.
            return a
        }, {}))
        //this will be an array with all objects who pushed yet.
        return a

        //this is an array with 3 elements
        // return currRow;
    }, [])
        .filter(object => object['Graduated with an average score'] >= 3)
        .sort((obj1, obj2) => {
            return obj1["Grade"] - obj2["Grade"]
        })
        .map((object) => {
            object["Grade"] = Number(object["Grade"]) + 1
            return object
        })
        .reduce((a, b) => {
            //this is an array of arrays and for each array we have key-value pairs
            //key is on the 0 index
            //value is on the 1 index
            let entries = Object.entries(b)
            // return entries
            //entries[1][1] takes the value on the Grade key
            if (a.filter(element => element.Grade === entries[1][1]).length === 0) {//if we haven't two same grades
                a.push({
                    ["Grade"]: entries[1][1],//["Grade"] because we make access to the Grade key of the 'a' object.
                    ['List of students']: [entries[0][1]],
                    ['Average annual grade from last year']: [entries[2][1]]
                })
            } else {
                let object = a.filter(element => element.Grade === entries[1][1])[0];//[0] to take first element
                object['List of students'].push(entries[0][1])
                object['Average annual grade from last year'].push(entries[2][1])
            }
            return a;
        }, [])
        .forEach(object => {
            // console.log(Object.values(object))
            console.log(`${Object.values(object)[0]} Grade
List of students: ${Object.values(object)[1].join(', ')}
Average annual score from last year: ${(Object.values(object)[2].
            map(Number)
                .reduce((a,b)=>a+b) / Object.values(object)[2].length).toFixed(2)}`)
        })
}

console.log(schoolRegisterMy([
        "Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
        "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
        "Student name: George, Grade: 8, Graduated with an average score: 2.83",
        "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
        "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
        "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
        "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
        "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
        "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
        "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
        "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
        "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00"
    ]
))
