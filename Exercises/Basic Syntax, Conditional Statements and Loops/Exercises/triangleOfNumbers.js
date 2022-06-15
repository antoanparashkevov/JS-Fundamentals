function triangleOfNumbers(num) {
    for (let i = 1; i <= num; i++) { //1,2,3
        let line = '';
        for (let j = 1; j <= i; j++) { //1  1 2   1 2 3
            line +=i;
            if(j!==i){
                line += ' ';
            }
        }
        console.log(line);
    }

}

triangleOfNumbers(3)
