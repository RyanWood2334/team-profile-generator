// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
//needs name, ID, email, and school
class Intern {
  constructor(name, employeeId, emailAddress, school) {
    super(name, emailAddress, employeeId);
    this.school = school;
  }
}

module.exports = Intern;
