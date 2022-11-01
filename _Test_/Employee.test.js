const Employee = require("../lib/Employee");

test("Can create an new employee.", () => {
    const employeeInstance = new Employee();
    expect(typeof(employeeInstance)).toBe("object");
})

test("Testing name.", () => {
    const name = "Mariana";
    const employeeInstance = new Employee(name);
    expect(employeeInstance.name).toBe(name);
})

test("Testing ID.", () => {
    const id = 21;
    const employeeInstance = new Employee("Mariana", id);
    expect(employeeInstance.id).toBe(id);
})

test("Testing email.", () => {
    const email = "mariana21hch@gmail";
    const employeeInstance = new Employee("Mariana", 21, email);
    expect(employeeInstance.email).toBe(email);
})



test("Gets name through getName method.", () => {
    const testName = "Mariana";
    const employeeInstance = new Employee(testName);
    expect(employeeInstance.getName()).toBe(testName);
})

test("Can test ID through getID method.", () => {
    const testID = 21;
    const employeeInstance = new Employee("Mariana", testID);
    expect(employeeInstance.getId()).toBe(testID);
})

test("Can test email through getEmail method.", () => {
    const testEmail = "mariana21hch@gmail.com";
    const employeeInstance = new Employee("Mariana", 21, testEmail);
    expect(employeeInstance.getEmail()).toBe(testEmail);
})

test("Testing role.", () => {
    const returnValue = "Employee";
    const employeeInstance = new Employee("Mariana", 21, "mariana21hch@gmail.com");
    expect(employeeInstance.getRole()).toBe(returnValue);
})