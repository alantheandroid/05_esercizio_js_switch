let ceo = 2200;
let manager = 1800;
let cto = 1800;
let developer = 1500;
let other = 1000;

function calculateSalary(role) {
  switch (role) {
    case "ceo":
      return ceo;
    case "manager":
      return manager;
    case "cto":
      return cto;
    case "developer":
      return developer;
    default:
      return other;
  }
}

const ceoSalary = calculateSalary("ceo");
const managerSalary = calculateSalary("manager");
const ctoSalary = calculateSalary("cto");
const developerSalary = calculateSalary("developer");
const otherSalary = calculateSalary("other");

console.log(ceoSalary);
console.log(managerSalary);
console.log(ctoSalary);
console.log(developerSalary);
console.log(otherSalary);
