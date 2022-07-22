function bonusScoringSystem(input) {
    input = input.map(Number)
    let numberOfStudents = input[0];
    let totalNumberOfLectures = input[1];
    let additionalBonus = input[2];
    let index = 3;
    let maxBonus = 0;
    let maxAttendanceLectures =0;
    while(index<=3+numberOfStudents-1){
        let attendanceCountPerStudent = input[index];

        let bonus = attendanceCountPerStudent / totalNumberOfLectures * (5+additionalBonus)
        if(maxBonus<bonus){
            maxBonus = bonus;
            maxAttendanceLectures = input[index];
        }
        index++;

    }
    console.log(`Max Bonus: ${Math.ceil(maxBonus)}.`)
    console.log(`The student has attended ${Math.ceil(maxAttendanceLectures)} lectures.`)
}

bonusScoringSystem([
        '5', '25', '30',
        '12', '19', '24',
        '16', '20'
    ]
)
