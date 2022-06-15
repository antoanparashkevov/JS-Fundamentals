function primeNumberCheckers(prime) {
    let isPrime = false;
    if (prime > 0 && prime % 2 !== 0 && prime % 3 !== 0 && prime % 5 !== 0) {
        isPrime = true;
    }
    console.log(isPrime)
}

primeNumberCheckers(1)
primeNumberCheckers(7)
primeNumberCheckers(81)
primeNumberCheckers(0)
primeNumberCheckers(-5)


