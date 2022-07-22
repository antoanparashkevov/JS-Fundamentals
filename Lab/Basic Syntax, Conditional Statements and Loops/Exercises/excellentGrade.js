function excellentGrade(grade){
    if(grade>=5.50){
        console.log('Excellent');
    }else{
        console.log("Not excellent")
    }
}

excellentGrade(4);

function ternaryOperator(grade){
    //with ternary operator we have 3 zones.
    console.log(grade>=5.50 ? "Excellent" : "Not excellent");
}

ternaryOperator(5)
