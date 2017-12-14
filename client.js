$(document).ready(function() {
  class Employee {
    constructor(name, employeeNumber, annualSalary, reviewRating) {
      this.name = name;
      this.employeeNumber = employeeNumber;
      this.annualSalary = annualSalary;
      this.reviewRating = reviewRating;
    } // end constructor
    fifteenYearsOrLonger() {
      if (this.employeeNumber.length === 4) {
        return true;
      } // end oldschool
      else {
        return false;
      } // end not oldschool
    } // end fifteenYearsOrLonger
  } // end Employee class
  var atticus = new Employee("Atticus", "2405", "47000", 3);
  var jem = new Employee("Jem", "62347", "63500", 4);
  var boo = new Employee("Boo", "11435", "54000", 3);
  var scout = new Employee("Scout", "6243", "74750", 5);
  var robert = new Employee("Robert", "26835", "66000", 1);
  var mayella = new Employee("Mayella", "89068", "35000", 2);
  var employees = [atticus, jem, boo, scout, robert, mayella];
  // console.log(employees);

  function calculateEmployee(employee) {
    // console.log('in calculateEmployee:', employee);
    var bonusPercentage = 0;
    bonusPercentage += calculateReviewRatingBonus(employee.reviewRating);
    // console.log('bonus after review rating check:', bonusPercentage);
    // employee number
    if (employee.fifteenYearsOrLonger()) {
      // console.log('oldschool cat');
      bonusPercentage += 0.05;
    } // end call to fifteenYearsOrLonger method
    // max salary
    if (Number(employee.annualSalary) > 65000) {
      // console.log('too high salary, adjusting');
      bonusPercentage -= 0.01;
    } // end salary check
    // min/max bonus
    if (bonusPercentage > 0.13) {
      bonusPercentage = 0.13;
    } // end bonus too high
    else if (bonusPercentage < 0.0) {
      bonusPercentage = 0;
    } // end no negatives
    // return an object
    var objectToReturn = {
      name: employee.name,
      bonusPercentage: bonusPercentage,
      totalCompensation: Number(employee.annualSalary) + Number(employee.annualSalary) * bonusPercentage,
      totalBonus: Number(employee.annualSalary) * bonusPercentage
    } // end object to return
    return objectToReturn;
  } // end calculateEmployee

  function calculateEveryEmployee() {
    //console.log('in calculateEveryEmployee');
    $('#outputDiv').empty();
    // loop through employees array and send each to be calculated
    for (var i = 0; i < employees.length; i++) {
      var calculatedEmployee = calculateEmployee(employees[i]);
      console.log('calculatedEmployee:', calculatedEmployee);
      $('#outputDiv').append('<h3>' + calculatedEmployee.name + '</h3>');
      $('#outputDiv').append('<p>bonusPercentage: ' + calculatedEmployee.bonusPercentage * 100 + '%</p>');
      $('#outputDiv').append('<p>totalBonus: $ ' + calculatedEmployee.totalBonus.toFixed(2) + '</p>');
      $('#outputDiv').append('<p>totalCompensation: $ ' + calculatedEmployee.totalCompensation.toFixed(2) + '</p>');
    } // end loop
  } // end calculateEveryEmployee

  function calculateReviewRatingBonus(reviewRating) {
    // console.log('in calculateReviewRatingBonus:', reviewRating);
    // calculate reviewRating
    if (reviewRating === 3) {
      return 0.04;
    } // end 3
    else if (reviewRating === 4) {
      return 0.06;
    } // end 4
    else if (reviewRating === 5) {
      return 0.10;
    } // end 5
    else {
      return 0.0;
    } // end other
  } // end calculateReviewRatingBonus

  $(document).ready(function() {
    console.log('JQ');
    calculateEveryEmployee();

  })
});
