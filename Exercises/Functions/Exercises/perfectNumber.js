function perfectNumber(num) {
    let divisors = [];
     divisors.push(1);

    function allDivisors(number) {
        for(let i = 2;i<=number;i++){
            if(number%i === 0){
                divisors.push(i)//2,4,7,14
            }
        }
    }

    allDivisors(num);
    console.log(divisors)
    function isPerfect(n) {
        let ourNumber = Number(n);
        let sum = 0;
        for(let i = 0;i<divisors.length;i++){
            // console.log(divisors[i])
            sum+=Number(divisors[i]);
        }
        sum-=n;
        console.log(sum)
        if(sum===ourNumber){
            console.log(`We have a perfect number!`)
        }else{
            console.log(`It's not so perfect.`)
        }
    }
    isPerfect(num)
}

perfectNumber(6);
perfectNumber(28);
