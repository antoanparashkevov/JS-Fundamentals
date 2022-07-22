function schoolRegister(schoolData) {
    return schoolData.reduce((a, b) => {
        let tuples = b.split(', ');//this will return last String element from schoolData
        //a is an empty array at the beginning, and we push another array with 3 elements (Students name, Grade, Graduated ...)
        a.push(tuples.reduce((a, b) => {
            let [key, value] = b.split(': ')
            a[key] = value;
            return a
        }, {}))
        return a
        // a.push(tuples)//this pushes all arrays with students.
        // return a;
    }, [])//now we have one array and inside of it we have some objects with every student.
        .filter(object => object['Graduated with an average score'] >= 3)
        //inside element we have this:
        //{
        //     'Student name': 'Mark',
        //     Grade: '8',
        //     'Graduated with an average score': '4.75'
        //   },
        //we filed a key "Graduated with an average score), and if the value of this key is bigger than 3
        .sort((a,b)=>a['Grade'] - b['Grade'])
        //we sort in ascending order the elements for every object by the value from key "Grade"
        .map(object=>{
            object["Grade"] = Number(object["Grade"])+ 1
            //we take the value from key "Grade" and increase the grade by 1 because the score is bigger than 3
            return object;
        })
        //for each two objects we want to connect students who is in the same grade
        .reduce((a,b)=>{
            let entries = Object.entries(b);//make a entries (key-value pairs)
            //if for each object with Grade key is equal to the next object with Grade Key (entries[1][1])
            //first [1] is because we are looking for next object
            //second [1] is because the key Grade is on the first index of the object
            if(a.filter(element => element.Grade === entries[1][1]).length===0){
                a.push({
                    ["Grade"]: entries[1][1],//["Grade"] because we make access to the Grade key of the 'a' object.
                    ['List of students']: [entries[0][1]],
                    ['Average annual grade from last year']:[entries[2][1]]
                })
            }else{
                let object = a.filter(element=>element.Grade === entries[1][1])[0];
                object['List of students'].push(entries[0][1])
                object['Average annual grade from last year'].push(entries[2][1])
            }
            return a
        },[])
        .forEach(object => {
            console.log(`${Object.values(object)[0]} Grade
List of students: ${Object.values(object)[1].join(', ')}
Average annual score from last year: ${(Object.values(object)[2]
                .map(Number)
                .reduce((a, b) => a + b) / Object.values(object)[2].length).toFixed(2)}`
                //sum the scores and divide to array.length of the scores array
            )
            console.log();
        })

}

console.log(schoolRegister([
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
