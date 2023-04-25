// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.

const Employee = require("./Employee");

//needs name, ID, email, and school
class Intern extends Employee {
  constructor(name, employeeId, emailAddress, school) {
    super(name, employeeId, emailAddress);
    this.school = school;
  }
}

module.exports = Intern;
