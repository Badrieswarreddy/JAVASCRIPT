function person(name,age,designation)
{
    this.name=name;
    this.age=age;
    this.designation=designation;
}
var p1=new person("Badrieswar",23,"student");
var p2=new person("Rohini",24,"student");

console.log(p1.name);
console.log(p1.age);
console.log(p1.designation);
console.log(p2.name);
console.log(p2.age);
console.log(p2.designation);
