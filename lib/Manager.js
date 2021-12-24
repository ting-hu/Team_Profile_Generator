const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }

  getRole() {
    return "Manager";
  }
  getOfficeNumber() {
    return this.officeNumber;
  }
  getCard() {
    return `
        <div class="card column is-one-third-desktop is-half-tablet">
        <div class="card-content">

        <div class="media">
        <div class="media-left">
            <figure class="image is-48x48">
            <i class="fas fa-mug-hot"></i>
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
                <li> Office Number: ${this.getOffice()} </li>
            </ul>
        </div>
        </div>
    </div>
        `;
  }
}

module.exports = Manager;
