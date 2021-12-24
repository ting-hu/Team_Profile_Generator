const Intern = require("../lib/Intern");

test("Creating an intern object", () => {
  const intern = new Intern("Ting", 5, "ting@email", "school");

  expect(intern.name).toBe("Ting");
  expect(intern.id).toEqual(expect.any(Number));
  expect(intern.email).toEqual(expect.any(String));
  expect(intern.school).toEqual(expect.any(String));
});

test("The getters for an intern", () => {
  const intern = new Intern("Ting", 5, "ting@email.com", "QA");

  expect(intern.getName()).toBe("Ting");
  expect(intern.getEmail()).toBe("ting@email.com");
  expect(intern.getId()).toEqual(expect.any(Number));
  expect(intern.getSchool()).toEqual(expect.any(String));
});
