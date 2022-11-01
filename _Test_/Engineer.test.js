const Engineer = require("../lib/Engineer");

test("Can create a github.", () => {
    const testGithub = "Mariana21hch";
    const employeeInstance = new Engineer("Mariana", 21, "mariana21hch@gmail", testGithub);
    expect(employeeInstance.github).toBe(testGithub);
});

test("Testing getGithub will return github.", () => {
    const testGithub = "Mariana21hch";
    const employeeInstance = new Engineer("Mariana", 21, "mariana21hch@gmail", testGithub);
    expect(employeeInstance.getGithub()).toBe(testGithub);
});

test("Testing role.", () => {
    const returnValue = "Engineer";
    const employeeInstance = new Engineer("Mariana", 21, "mariana21hch@gmail", "Mariana21hch");
    expect(employeeInstance.getRole()).toBe(returnValue);
});





