
function f(n){
    var a = 1
    for(var i = 1;i<=n;i++){
        a*=i
    }
    return a
}
console.log('10! = '+f(10))
console.log('5! = '+f(5))
console.log('12! = '+f(12))