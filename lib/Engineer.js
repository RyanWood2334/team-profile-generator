// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
//needs name, ID, email, github username
const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, employeeId, emailAddress, github) {
    super(name, employeeId, emailAddress);
    this.github = github;
  }
}
module.exports = Engineer;
