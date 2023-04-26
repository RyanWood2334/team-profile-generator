// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
//needs name, ID, email, github username
const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }
  getGithub = () => {
    const employeeGithub = this.github;
    console.log(this.github);
    return employeeGithub;
  };
}
module.exports = Engineer;
