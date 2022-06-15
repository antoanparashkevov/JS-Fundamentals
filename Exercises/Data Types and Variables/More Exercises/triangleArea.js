function triangleArea(a, b, c) {
    let semiParameter = (a + b + c) / 2;
    let heronsFormulasForArea = Math.sqrt(semiParameter * (semiParameter - a) * (semiParameter - b) * (semiParameter - c));
    console.log(heronsFormulasForArea)
}

triangleArea(2, 3.5, 4)
