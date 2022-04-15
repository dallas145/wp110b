function isPrime(n) {
    var c = 0
    for(var i = 1;i<=n;i++){
        if (n%i == 0) c += 1
    }
    if (c == 2) return 'true'
    else return 'false'
}
console.log('isPrime(17) => '+isPrime(17))
console.log('isPrime(15) => '+isPrime(15))
console.log('isPrime(100) => '+isPrime(100))