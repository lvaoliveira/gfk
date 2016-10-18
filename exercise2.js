const Person = function(firstName) {
  this.firstName = firstName;
};

Person.prototype.hiMyNameIs = function() {
  document.write("Hi, my name is " + this.firstName);
};

function Employee(firstName, company) {
  Person.call(this, firstName);
  this.company = company;
}

Employee.prototype = Object.create(Person.prototype);

Employee.prototype.constructor = Employee;

Employee.prototype.seeYouLater = function(){
  document.write(", see you later!");
};

const newEmployee = new Employee("Lucas", "Applied to GFK");
newEmployee.hiMyNameIs();
newEmployee.seeYouLater();

document.write('<br/>');
document.write(newEmployee instanceof Person);
document.write('<br/>');
document.write(newEmployee instanceof Employee);