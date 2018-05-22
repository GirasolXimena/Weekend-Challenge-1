$(document).ready(onReady);
console.log('JS');

function onReady() {
    console.log('JQ');
    $(`#rmEmployeeButton`).on( `click`, removeEmployee)
    $(`#submitButton`).on( `click`, function() {
        addEmployee();
        checkCost();
        
          }

    )};
let workers = [];
let cost = [];
let totalCosts =0;
class Employee {
    constructor (firstName, lastName, idNum, jTitle, annualSalary)  {
        this.firstName = firstName;
        this.lastName = lastName;
        this.idNum = idNum;
        this.jTitle = jTitle;
        this.annualSalary = annualSalary;
    }
}

function addEmployee( firstName, lastName, idNum, jTitle, annualSalary) {
    firstName = $(`#fNameInput`).val();
    lastName =$(`#lNameInput`).val();
    idNum = $(`#idInput`).val();
    jTitle = $(`#titleInput`).val();
    annualSalary = $(`#salaryInput`).val();
    if( firstName === "" || lastName === "" || idNum === "" || jTitle === "" || 
    annualSalary === "") {
        alert (`Please fill in all boxes before continuing.`);
    }
    else {
    $(`#outputString`).empty();
    let newEmployee = new Employee ( firstName, lastName, idNum, jTitle, annualSalary);
    workers.push(newEmployee);
    console.log(workers);
    let el = 0;
    for (employee of workers) {
        el++;
        let outPut = `<div class="row card-body" id="` + employee.firstName + `">`;
        outPut += `<div class="col-2" >`;
        outPut += `<p>` + employee.firstName + `</p>`;
        outPut += `</div>`;
        outPut += `<div class="col-2">`;
        outPut += `<p>` + employee.lastName + `</p>`;
        outPut += `</div>`;        
        outPut += `<div class="col-2">`;
        outPut += `<p>` + employee.idNum + `</p>`;
        outPut += `</div>`;
        outPut += `<div class="col-2">`;
        outPut += `<p>` + employee.jTitle + `</p>`;
        outPut += `</div>`;
        outPut += `<div class="col-2">`;
        outPut += `<p>` + employee.annualSalary + `</p>`;
        outPut += `</div>`;
        $(`#outputString`).append(outPut);
        
    }
    $(`#costOutput`).empty();
    newCost = parseInt($(`#salaryInput`).val());
    totalCosts += newCost;
    $(`#costOutput`).append(`Total Monthly Costs: $` + totalCosts);
    newCost=0;

    firstName = $(`#fNameInput`).val(``);
lastName =$(`#lNameInput`).val(``);
idNum = $(`#idInput`).val(``);
jTitle = $(`#titleInput`).val(``);
annualSalary = $(`#salaryInput`).val(``);
return totalCosts;
}}

function checkCost() {
    if (totalCosts >= 20000) {
    console.log('in checkCost');
    $(`#costOutput`).addClass(`redBackground`);
    }
}

function removeEmployee() {
    
    $(`#` + workers[workers.length- 1].firstName).empty();
    $(`#costOutput`).empty();
    newCost = parseInt((workers[workers.length- 1].annualSalary));
    console.log(newCost);
    totalCosts -= newCost;
    console.log(totalCosts);
    $(`#costOutput`).append(`Total Monthly Costs: $` + totalCosts);
    workers.pop();
    newCost=0;
    return totalCosts;

}