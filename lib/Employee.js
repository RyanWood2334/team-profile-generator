// TODO: Write code to define and export the Employee class
//parent class
class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }
  getRole = () => {
    console.log(this.constructor.name);
    return this.constructor.name;
  };
  getName = () => {
    const employeeName = this.name;
    console.log(this.name);
    return employeeName;
  };
  getId = () => {
    const employeeId = this.id;
    console.log(this.id);
    return employeeId;
  };
  getEmail = () => {
    const employeeEmail = this.email;
    console.log(this.email);
    return employeeEmail;
  };
}

module.exports = Employee;

// const testEmployee = new Employee("ryan", 12313, "ryan@ryan.com");
// console.log(testEmployee);
