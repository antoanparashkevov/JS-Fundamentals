function distanceBetweenPoints(x1,y1,x2,y2) {
//we will use pythagorean theorem
    //c^2 = a^2 + b^2
    // c = Math.sqrt(a^2 + b^2)
    //c is hypotenuse that we want to find
    let a = x1-x2;
    let b = y1-y2;
    let distance = Math.sqrt(a*a + b*b);
    console.log(distance)

}

distanceBetweenPoints(1,1,2,2)
