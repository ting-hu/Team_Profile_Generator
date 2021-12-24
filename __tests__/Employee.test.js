const Employee = require("../lib/Employee.js");

test("Creating an employee object", () => {
  const employee = new Employee("Ting", 10, "ting@email");

  expect(employee.name).toBe("Ting");
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toEqual(expect.any(String));
});

test("Getter for employee's name", () => {
  const employee = new Employee("Ting", 10, "ting@email");

  expect(employee.getName()).toBe("Ting");
});

test("Getter for employee's id", () => {
  const employee = new Employee("Ting", 10, "ting@email");

  expect(employee.getId()).toEqual(expect.any(Number));
});

test("Getter for employee's email", () => {
  const employee = new Employee("Ting", 10, "ting@email");

  expect(employee.getEmail()).toEqual(expect.any(String));
});
