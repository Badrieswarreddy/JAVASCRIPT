function greets()
{
    console.log("Good Morning")
}
greets();
//Without parameter and return type

//With parameter and without returntype
function add(a,b)
{
    sum=a+b;
    console.log("Sum of two numbers "+sum);
}
add(2,3);

//Without parameter and with return type
function diff()
{
    let a=3;
    let b=2;
    difference=a-b;
    return difference


}
let result=diff()
console.log("Difference is "+result)

//With Parameter and Return type
function div(a,b)
{
    let division =a/b;
    return division;
}
let r=div(5,2);
console.log("Division is "+r);