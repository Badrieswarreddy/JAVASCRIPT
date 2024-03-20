class Employee
{
    orgName="Google";
    constructor(empID,empName,empSalary)
    {
        this.empID=empID;
        this.empName=empName;
        this.empSalary=empSalary;
    }
    getEmpInfo()
    {
        console.log("ID = "+this.empID);
        console.log("Name = "+this.empName);
        console.log("Salary = "+this.empSalary);
        console.log("Orgaanization Nmae = "+this.orgName);
    }
}
let emp1=new Employee(101,'Badrieswar',50500);
let emp2=new Employee(102,'Manikanta',50000);
emp1.getEmpInfo();
emp2.getEmpInfo();
