
class EmployeeObject {

  constructor(name, employeeNumber, annualSalary, reviewRating) {

    this.name = name;
    this.employeeNumber = employeeNumber;
    this.annualSalary = annualSalary;
    this.reviewRating = reviewRating;

  }
}

  function bonusPercentage (person) {
    var bonusPercent = 0;
    if (person.reviewRating <= 2){
      bonusPercent = 0;
    }
    else if(person.reviewRating == 3){
      bonusPercent = 0.04;
    }
    else if(person.reviewRating == 4){
      bonusPercent = 0.06;
    }
    else{
      bonusPercent = 0.1;
    }
    if(person.employeeNumber.length == 4){
      bonusPercent += 0.05;
    }
    if(person.annualSalary > 65000){
      bonusPercent -= 0.01;
    }
    if(bonusPercent > 0.13){
      bonusPercent = 0.13;
    }
    if(bonusPercent < 0){
      bonusPercent = 0;
    }
    return bonusPercent;
    }
  var bonus = 0;
  function totalBonus (person){
      var bonus = person.annualSalary * bonusPercentage(person);
      return Math.round(bonus);
    }

    function totalCompensation(person){
    return  totalBonus(person) + parseInt(person.annualSalary);
  }

var atticus = new EmployeeObject( "Atticus", "2405","47000",3);
var jem = new EmployeeObject("Jem", "62347","63500",4 );
var boo = new EmployeeObject(  "Boo","11435","54000",3 );
var scout = new EmployeeObject("Scout","6243","74750",5 );
var robert = new EmployeeObject("Robert","26835","66000",1 );
var mayella = new EmployeeObject("Mayella","89068","35000",2 );
var employees = [ atticus, jem, boo, scout, robert, mayella ];
console.log(employees);
console.log(bonusPercentage(robert));
