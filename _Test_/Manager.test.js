const Manager = require("../lib/Manager");

test("Can create an office number.", () => {
    const testOfficeNumber = 21;
    const employeeInstance = new Manager("Mariana", 21, "mariana21hch@gmail", testOfficeNumber);
    expect(employeeInstance.officeNumber).toBe(testOfficeNumber);
});

test("Testing officeNumber will return office number.", () => {
    const testOfficeNumber = 21;
    const employeeInstance = new Manager("Mariana", 21, "mariana21hch@gmail", testOfficeNumber);
    expect(employeeInstance.getOfficeNumber()).toBe(testOfficeNumber);
});

test("Testing role.", () => {
    const returnValue = "Manager";
    const employeeInstance = new Manager("Mariana", 21, "mariana21hch@gmail", 21);
    expect(employeeInstance.getRole()).toBe(returnValue);
});