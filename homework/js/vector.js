class Vector {
  constructor(array) {
    this.a = array
  }

  length() {
    var x =0;
    for(let i=0;i<this.a.length;i++){
      x += Math.pow(this.a[i],2);
    }
    return Math.sqrt(x);
  }

  neg() {
    var x = [];
    for(let i=0;i<this.a.length;i++){
      x[i]=-this.a[i];
    }
    return new Vector(x);
  }

  add(p2) {
    var x = [];
    for(let i=0;i<this.a.length;i++){
      x[i]=this.a[i]+p2.a[i];
    }
    return new Vector(x);
  }

  sub(p2) {
    return this.add(p2.neg());
  }

  dot(p2) {
    var x=0;
    for(let i=0;i<this.a.length;i++){
      x+=this.a[i]*p2.a[i];
    }
    return x;
  }

  distance(p2) {
    return this.sub(p2).length();
  }

  toString() {
    return this.a.toString();
  }
}
let p = new Vector([1,2,3]);
let p2 = new Vector([2,3,4]);
console.log(p);
console.log('p = ('+ p.toString()+')');
console.log('p.length = ', p.length());
console.log('p.neg = ('+ p.neg().toString()+')');
console.log('p.add(p2) = ('+ p.add(p2).toString()+')');
console.log('p.sub(p2)=('+ p.sub(p2)+')');
console.log('p.dot(p2)=', p.dot(p2));
console.log('p.sub(p2).length()=', p.sub(p2).length());
console.log('p.distance(p2)=', p.distance(p2));