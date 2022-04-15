function factor(n){
    var ar = []
    for(var i = 2;i<=n;i++){
        while(n!=i){
            if(n%i==0){
                ar.push(i)
                n/=i
            }
            else break
        }
        if(n==i)ar.push(n)
    }
    return ar
}
console.log(factor(45))
console.log(factor(888))