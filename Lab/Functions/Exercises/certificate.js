function certificate(grade, names) {//this is self-documenting code.
    if (pass(grade)) {
        printHeader();
        printName(names);
        formatGrade(grade);
    } else {
        console.log(`Student does not qualify`)
    }
}

function printHeader() {
    console.log('~~~-   {@}   -~~~');
    console.log('~- Certificate -~');
    console.log('~~~-  ~---~  -~~~');
}

function printName(nameArr) {
    console.log(nameArr[0] + ' ' + nameArr[1]);
}

function formatGrade(grade) {
    let formatted = grade.toFixed(2);//it converts to String
    let description;
    if (grade < 3.00) {
        formatted = '2';
        description = "Fail";
    } else if (grade >= 3.00 && grade < 3.50) {
        description = 'Poor'
    } else if (grade >= 3.50 && grade < 4.50) {
        description = 'Good'
    } else if (grade >= 4.50 && grade < 5.50) {
        description = 'Very good'
    } else {
        description = 'Excellent'
    }

    console.log(`${description} (${formatted})`)
}

function pass(grade) {
    return grade >= 3;
}


certificate(5.25, ["John", 'Smith'])
certificate(2.80, ["John", 'Smith'])
certificate(2.99, ["John", 'Smith'])
certificate(5.256, ["John", 'Smith'])
