const Engineer = require("../lib/Engineer");

test("Creating an engineer object", () => {
  const engineer = new Engineer("Ting", 5, "ting@email", "ting-hu");

  expect(engineer.name).toBe("Ting");
  expect(engineer.id).toEqual(expect.any(Number));
  expect(engineer.email).toEqual(expect.any(String));
  expect(engineer.github).toEqual(expect.any(String));
});

test("Getters for an engineer", () => {
  const engineer = new Engineer("Ting", 5, "ting@email", "ting-hu");

  expect(engineer.getName()).toEqual("Ting");
  expect(engineer.getId()).toEqual(expect.any(Number));
  expect(engineer.getEmail()).toEqual(expect.any(String));
  expect(engineer.getGithub()).toEqual(expect.any(String));
});
