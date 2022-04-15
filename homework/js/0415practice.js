/*var man = {
    name: 'kelvin',
    age: 18,
    print: function () {
        console.log('name is '+this.name+'\n'+'age is '+this.age)
    }
}
man.print()*/

/*var circle = {
    r: 5,
    area: function() {
        return this.r*this.r*3.14
    }
}
console.log('circle.r = '+circle.r+'\narea = '+circle.area())*/
class circle {
    constructor(r){
        this.r = r
    }
    area(){
        return 3.14*this.r*this.r
    }
}
var c1 = new circle(5)
var c2 = new circle(10)
console.log('c1.area = '+c1.area()+'\nc2.area = '+c2.area())