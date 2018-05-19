$(document).ready(onReady);
console.log('JS');

function onReady() {
    console.log('JQ');

    $(`#submitButton`).on( `click`, function() {
        ;
    });
}

   
//     //    $(`#fNameInput`).val(),
//     //    $(`#lNameInput`).val(),
//     //    $(`#idInput`).val(),
//     //    $(`#titleInput`).val(),
//     //    $(`#salaryInput`).val(),
//    )
   
   
//    });
// };

let workers = [];
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
    
    
    
    let newEmployee = new Employee ( firstName, lastName, idNum, jTitle, annualSalary);
    workers.push(newEmployee);
    console.log(workers);

    firstName = $(`#fNameInput`).val(``);
    lastName =$(`#lNameInput`).val(``);
    idNum = $(`#idInput`).val(``);
    jTitle = $(`#titleInput`).val(``);
    annualSalary = $(`#salaryInput`).val(``);
       
}

// addEmployee(`bob`,`butt`,69,`buttmaster`,420);