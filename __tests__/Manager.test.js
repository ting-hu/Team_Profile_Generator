const Manager = require("../lib/Manager.js");

test("Creating an manager object", () => {
  const manager = new Manager("Ting", 5, "ting@email", 15);

  expect(manager.name).toBe("Ting");
  expect(manager.id).toEqual(expect.any(Number));
  expect(manager.email).toEqual(expect.any(String));
  expect(manager.office).toEqual(expect.any(Number));
});

test("The getters for a manager", () => {
  const manager = new Manager("Ting", 5, "ting@email.com", "QA");

  expect(manager.getName()).toBe("Ting");
  expect(manager.getEmail()).toBe("ting@email.com");
  expect(manager.getId()).toEqual(expect.any(Number));
  expect(manager.getOfficeNumber()).toEqual(expect.any(String));
});
