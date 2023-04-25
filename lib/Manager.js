// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
// need name, employee id number, email address, and office number
class Manager {
  constructor(name, employeeId, emailAddress, officeNum) {
    super(name, emailAddress, employeeId);
    this.officeNum = officeNum;
  }
}

module.exports = Manager;
