function square(n){
    return n*n;
}
var h = 0.00001;
function df(f,x){
    return (f(x+h)-f(x))/h;
}
console.log(df(square,5));