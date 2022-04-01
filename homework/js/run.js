function square(n)
{
    return n*n;
}
function run(f, x)
{
    var fx = f(x);
    console.log("f(x)="+fx);
}
run(square, 5);