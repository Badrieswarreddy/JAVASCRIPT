var a=new Array(3);
a[0]="HTML";
a[1]="CSS";
a[2]="JAVASCRIPT";

console.log(a);
console.log(a.ength);
//combine method
var arr=new Array(1,2);
var brr=new Array(3,4);
var crr=arr.concat(brr);
console.log(crr);
//pop and push methods
var c=new Array(1,2);
c.pop();
console.log(c);
c.push("Hello");
console.log(c);
//delete method
delete c[0];
console.log(c);
