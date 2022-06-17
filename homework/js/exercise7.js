let me = "name:neil age:18 weight:48 height:169";
let re = /[0-9]+/g;
console.log(re);
console.log(me);
console.log(me.match(re));
let re2 = /[a-z]+/g;
console.log(me.match(re2));
let re3 = /:([0-9a-zA-Z])+/g;
console.log(me.match(re3));
let re4 = /:([0-9a-zA-Z])+/
console.log(me.match(re4));
let re5 = /:([0-9a-zA-Z]+)/
console.log(me.match(re5));
let re6 = /:\w+/;
console.log(me.match(re6));
let re7 = /:\d+/g;
console.log(me.match(re7));
let re8 = /:\D+/g;
console.log(me.match(re8));
let text = "hello world , neil , your email is mikelg512@gmail.com , how are you !";
console.log(text);
let r1 = /\w+@[\w\.]+/g;
console.log(text.match(r1));
let text2 = "hello world , neil , your email is mikelg512@gmail.com , how are you ! abc mmm@q ...";
console.log(text2);
console.log(text2.match(r1));
let r2 = /\w+@\w+\.[\w\.]+/g;
console.log(text2.match(r2));
