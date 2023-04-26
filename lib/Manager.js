// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
// need name, employee id number, email address, and office number

const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, email, id, officeNumber) {
    super(name, email, id);
    this.officeNumber = officeNumber;
  }
}

module.exports = Manager;
