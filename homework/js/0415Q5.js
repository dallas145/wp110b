/*function mean(ar){
    var ar = []
    var a = 0
    for(var i=0;i<ar.length;i++){
        a += ar[i]
    }
    return a/ar.length
}
console.log(mean[1,2,3,4,5])*/
var ar = []
function mean(ar){
    var a=0
    for(var i=0;i<ar.length;i++){
    a+=ar[i]
    }
    return a/ar.length
}
console.log(mean([1,2,3,4,5]))
console.log(mean([2,4,6,8,10]))