function specialNumbers(n) {
    for(let num = 1;num<=n;num++){
        let result = 0;
        let numAsString = String(num);
        for(let j = 0;j<numAsString.length;j++){

            result+=Number(numAsString[j]);
        }
        let special = false;
        if(result === 5 || result === 7 || result === 11){
          special = true;
        }
        console.log(special ? `${num} -> True` : `${num} -> False`)
    }
}

specialNumbers(10)
