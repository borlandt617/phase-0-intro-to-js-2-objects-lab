const employee = {
name: "Sam",
StreetAddress: "11 Broadway",

};

function updateEmployeeWithKeyAndValue(employee, key, value) {
   employee[key] = value;
   
   return employee;

}
function nondestructivelyUpdateemployee(employee, key, value) {
    const newemployee = { ...employee };
    newEmployee[key] = value;
    return newEmployee;


}
console.log(newEmployee)