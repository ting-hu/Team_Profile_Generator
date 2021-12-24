const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");
const fs = require("fs");

//this will return each members getCard() methods defined in the engineer, manager, and intern objects and will be used in the generatePage function below
function writeCards(team) {
  const cards = team.map((member) => {
    return member.getCard();
  });
  return cards.join("\n");
}

//this function will be ran as the file content in the createPage funciton below to write the file
function generatePage(team) {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css">
        <script src="https://kit.fontawesome.com/a14d8b8912.js" crossorigin="anonymous"></script>
        <link rel="stylesheet" href="../src/css/styles.css">
        <title>Team Profile</title>
    </head>
    <body>
    <header>
    <div class="heading">
        <br>
        <i class="fas fa-users fa-9x"></i>
        <h1 class=" title is-1 heading-title "> My Team
        </h1>
    </div>
</header>
    <main>
        <section class="columns is-multiline is-centered">
            ${writeCards(team)}
        </section>
    </main>
    </body>
    </html>
  `;
}

//this is the function that takes the team array from the index.js and runs to write a file with the file content being what the generate page function returns above
function createPage(team) {
  fs.writeFile("./dist/index.html", generatePage(team), function (err) {
    if (err) {
      throw err;
    } else {
      console.log(
        "Your team profile was created! Check out your dist directory to see the index.hmtl page!"
      );
    }
  });
}

module.exports = createPage;
