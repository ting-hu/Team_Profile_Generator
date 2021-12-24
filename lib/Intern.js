const Employee = require("./Employee");

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }

  getSchool() {
    return this.school;
  }

  getRole() {
    return "Intern";
  }
  getCard() {
    return `
        <div class="card column is-one-third-desktop is-half-tablet">
        <div class="card-content">

        <div class="media">
        <div class="media-left">
            <figure class="image is-48x48">
            <i class="fas fa-graduation-cap"></i>
            </figure>
        </div>
        <div class="media-content">
            <p class="title is-4"> ${this.getName()} </p>
            <p class="subtitle is-6"> ${this.getRole()}</p>
        </div>
        </div>

        <div class="content">
            <ul>
                <li>ID: ${this.getId()} </li>
                <li>Email: <a href="mailto:${this.getEmail()}">${this.getEmail()} </a> </li>
                <li> School: ${this.getSchool()} </li>
            </ul>
        </div>
        </div>
    </div>
        `;
  }
}

module.exports = Intern;
