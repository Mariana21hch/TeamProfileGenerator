// using Employee constructor 
const Employee = require('../lib/Employee');

// creates employee object 
test('creates an employee object', () => {
    const employee = new Employee('Nicole', 90, 'nicky@mail.com"');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

// gets id from getId() 
test('gets employee name', () => {
    const employee = new Employee('Nicky', 90, 'nicky@mail.com"');

    expect(employee.getName()).toEqual(expect.any(String));
});

// gets id from getId() 
test('gets employee ID', () => {
    const employee = new Employee('Nicole', 90, 'nicky@mail.com"');

    expect(employee.getId()).toEqual(expect.any(Number));
});


// gets role from getRole()
test('gets role of employee', () => {
    const employee = new Employee('Nicole', 90, 'nicky@mail.com"');

    expect(employee.getRole()).toEqual("Employee");
}); 