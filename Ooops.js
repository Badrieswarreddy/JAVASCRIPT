class Student
{
    setValues(id, name, marks)
    {
        this.id=id;
        this.name=name;
        this.marks=marks;
    }
    getValues()
    {
        console.log("ID = "+this.id);
        console.log("Name = "+this.name);
        console.log("Marks = "+this.marks);
    }
    study()
    {
        console.log("Studenr is studying ! ");
    }
}
let student1=new Student();
student1.setValues(101,'Badrieswar',87);
student1.getValues();
student1.study();