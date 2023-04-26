// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.

const Employee = require("./Employee");

//needs name, ID, email, and school
class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }
  getSchool = () => {
    const employeeSchool = this.school;
    console.log(this.school);
    return employeeSchool;
  };
}

module.exports = Intern;
