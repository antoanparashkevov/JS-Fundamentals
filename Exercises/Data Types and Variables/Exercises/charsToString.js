function charsToString(c1, c2, c3) {
    console.log(`${c1}${c2}${c3}`)//this is interpolation ``. This is much faster than concatenation
    let converted = "" + c1 + c2 + c3//this is concatenation and this returns string! This is deprecated!
    console.log(converted)
}

charsToString('a', 'b', 'c')
