const inquirer = require("inquirer");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const createPage = require("./src/page-template");
const emailValidator = require("email-validator");

//create an empty array to push new Employees to
const team = [];

//begin application prompts/ prompt questions about manager
function managerQuestions() {
  console.log(`
    ===============================================
    =======Begin building your team profile========
    ===============================================`);
  return (
    inquirer
      .prompt([
        {
          type: "input",
          name: "name",
          message: "What is your team manager's name?",
          validate: (name) => {
            if (name) {
              return true;
            } else {
              return "Please enter your manager's name.";
            }
          },
        },
        {
          type: "input",
          name: "id",
          message: "What is your team manager's employee ID?",
          validate: (id) => {
            const pass = !isNaN(id);
            if (id && pass) {
              return true;
            } else {
              return "Please enter a valid employee ID";
            }
          },
        },
        {
          type: "input",
          name: "email",
          message: "What is your team manager's email address?",
          validate: (email) => {
            if (emailValidator.validate(email) == true) {
              return true;
            } else {
              return "Enter a valid email address.";
            }
          },
        },
        {
          type: "input",
          name: "officeNumber",
          message: "What is your team manager's office number?",
          validate: (officeNumber) => {
            const pass = !isNaN(officeNumber);
            if (officeNumber && pass) {
              return true;
            } else {
              return "Please enter a valid office number";
            }
          },
        },
      ])
      //create a new manager object and push it to team array. Then run the choose Employee prompt
      .then(function (data) {
        const manager = new Manager(
          data.name,
          data.id,
          data.email,
          data.officeNumber
        );
        team.push(manager);
        chooseEmployee(team);
      })
      .catch((err) => {
        console.log(err);
      })
  );
}

// choose employee to add or to stop the prompts and create the team profile
function chooseEmployee(team) {
  return inquirer
    .prompt({
      type: "list",
      name: "typeEmployee",
      message: "What would you like to do next?",
      choices: ["Add an Engineer", "Add an Intern", "Create my team profile!"],
    })
    .then(function (data) {
      if (data.typeEmployee === "Add an Engineer") {
        engineerQuestions(team);
      } else if (data.typeEmployee === "Add an Intern") {
        internQuestions(team);
      } else {
        createPage(team);
      }
    })
    .catch((err) => {
      console.log(err);
    });
}

//prompt questions about engineer
function engineerQuestions(team) {
  return (
    inquirer
      .prompt([
        {
          type: "input",
          name: "name",
          message: "What is your engineer's name?",
          validate: (name) => {
            if (name) {
              return true;
            } else {
              return "Please enter your engineer's name.";
            }
          },
        },
        {
          type: "input",
          name: "id",
          message: "What is your engineer's employee ID?",
          validate: (id) => {
            const pass = !isNaN(id);
            if (id && pass) {
              return true;
            } else {
              return "Please enter a valid employee ID";
            }
          },
        },
        {
          type: "input",
          name: "email",
          message: "What is your engineer's email address?",
          validate: (email) => {
            if (emailValidator.validate(email) == true) {
              return true;
            } else {
              return "Enter a valid email address.";
            }
          },
        },
        {
          type: "input",
          name: "github",
          message: "What is your engineer's GitHub?",
          validate: (github) => {
            if (github) {
              return true;
            } else {
              return "Please enter your engineer's GitHub username.";
            }
          },
        },
      ])
      //create a new Engineer object and push it to team array. Then run the choose Employee prompt
      .then(function (data) {
        const engineer = new Engineer(
          data.name,
          data.id,
          data.email,
          data.github
        );
        team.push(engineer);
        chooseEmployee(team);
      })
      .catch((err) => {
        console.log(err);
      })
  );
}

//prompt questions about intern
function internQuestions() {
  return (
    inquirer
      .prompt([
        {
          type: "input",
          name: "name",
          message: "What is your intern's name?",
          validate: (name) => {
            if (name) {
              return true;
            } else {
              return "Please enter your intern's name.";
            }
          },
        },
        {
          type: "input",
          name: "id",
          message: "What is your intern's ID?",
          validate: (id) => {
            const pass = !isNaN(id);
            if (id && pass) {
              return true;
            } else {
              return "Please enter a valid employee ID";
            }
          },
        },
        {
          type: "input",
          name: "email",
          message: "What is your intern's email address?",
          validate: (email) => {
            if (emailValidator.validate(email) == true) {
              return true;
            } else {
              return "Enter a valid email address.";
            }
          },
        },
        {
          type: "input",
          name: "school",
          message: "What is your intern's school?",
          validate: (school) => {
            if (school) {
              return true;
            } else {
              return "Please enter your intern's school.";
            }
          },
        },
      ])
      //create a new Intern object and push it to team array. Then run the choose Employee prompt
      .then(function (data) {
        const intern = new Intern(data.name, data.id, data.email, data.school);
        team.push(intern);
        chooseEmployee(team);
      })
      .catch((err) => {
        console.log(err);
      })
  );
}

//initiate the application
managerQuestions();
