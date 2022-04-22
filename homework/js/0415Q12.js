class Ratio {
    constructor(a, b){
        this.a = a;
        this.b = b;
    }
    add(c){
        return new Ratio(this.a*c.b+c.a*this.b,this.b*c.b)
    }
    toString(){
        return this.a + '/' + this.b;
    }
}
var r1 = new Ratio(1,3);
var r2 = new Ratio(2,7);
var r3 = r1.add(r2);
console.log(r3.toString());