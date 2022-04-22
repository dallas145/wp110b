function integral(f, a, b) {
    var n = 0;
    for (var i = a; i < b; i += 0.000001){
        n += f(i)*0.000001;
    }
    return n;
}
console.log(integral((x)=> x*x,0,1));