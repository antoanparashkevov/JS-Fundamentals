function formatGrade(grade){
    let formatted = grade.toFixed(2);//it converts to String
    let description;
    if(grade < 3.00){
        formatted='2';
        description="Fail";
    }else if(grade >=3.00 && grade<3.50){
        description='Poor'
    }else if(grade >=3.50 && grade <4.50){
        description='Good'
    }else if(grade >=4.50 && grade<5.50){
        description='Very good'
    }else {
       description='Excellent'
    }

    console.log(`${description} (${formatted})`)
}
formatGrade(3.33)
formatGrade(4.50)
formatGrade(2.99)
