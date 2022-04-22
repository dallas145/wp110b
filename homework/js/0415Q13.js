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
    toString(){
        return this.a + '/' + this.b;
    }
}
var r1 = new Ratio(1,3);
var r2 = new Ratio(2,7);
var r3 = r1.mul(r2);
console.log(r3.toString());