class Ratio {
    constructor(a, b){
        this.a = a;
        this.b = b;
    }
    add(c){
        return new Ratio(this.a*c.b+c.a*this.b,this.b*c.b)
    }
    mul(d){
        return new Ratio(this.a*d.b-d.a*this.b,this.b*d.b)
    }
    reduce(){
        var n;
        if (this.a/this.b >= 1) n = this.b;
        else n = this.a
        for (var i = 2;i<=n;i++){
            if (this.a%i==0 && this.b%i==0){
                this.a /= i;
                this.b /= i;
                n /= i;
                i = 1;
            }
        }
    }
    toString(){
        return this.a + '/' + this.b;
    }
}
var r1 = new Ratio(1,3);
var r2 = new Ratio(2,7);
var r3 = r1.mul(r2);
var r4 = new Ratio(128,1024);
r4.reduce();
console.log(r4.toString());