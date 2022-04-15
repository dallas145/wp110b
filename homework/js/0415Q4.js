function filter(i,j){
    var ar = []
    for(var a = i;a<=j;a++){
        if (a%3!=0 && a%5!=0 && a%7!=0)ar.push(a)
    }
    return ar
}
console.log(filter(5,10))
console.log(filter(5,15))