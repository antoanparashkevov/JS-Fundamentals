function schoolRegister(schoolData) {
    return schoolData.reduce((a, b) => {
        let tuples = b.split(', ');//this will return last String element from schoolData
        a.push(tuples.reduce((a, b) => {
            let [stName, name] = b.split(': ')
            a[stName] = name;
            return a
        }, {}))
        return a
    }, [])
        .filter(element=> element['Graduated with an average score'] >=3)
        .sort((a,b)=>a['Grade'] - b['Grade'])
        .map(element=>{
            element["Grade"] = Number(element["Grade"])+ 1
            return element;
        })
        .reduce((a,b)=>{
            let entries = Object.entries(b);
            if(a.filter(element => element.Grade === entries[1][1]).length===0){
                a.push({
                    ["Grade"]: entries[1][1],
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
        .forEach(x => {
            console.log(`${Object.values(x)[0]} Grade 
List of students: ${Object.values(x)[1].join(', ')}
Average annual grade from last year: ${(Object.values(x)[2].map(Number).reduce((a, b) => a + b) / Object.values(x)[2].length).toFixed(2)}`
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
