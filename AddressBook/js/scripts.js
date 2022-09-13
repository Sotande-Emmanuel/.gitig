// Business Logic for AddressBook ---------
function AddressBook() {
  this.contacts = {};
  this.currentId = 0;
}

AddressBook.prototype.addContact = function (contact) {
  contact.id = this.assignId();
  this.contacts[contact.id] = contact;
};

AddressBook.prototype.assignId = function () {
  this.currentId += 1;
  return this.currentId;
};

AddressBook.prototype.findContact = function (id) {
  if (this.contacts[id] !== undefined) {
    return this.contacts[id];
  }
  return false;
};

AddressBook.prototype.deleteContact = function (id) {
  if (this.contacts[id] === undefined) {
    return false;
  }
  delete this.contacts[id];
  return true;
};


// Business Logic for Contacts ---------
function Contact(firstName, lastName, phoneNumber, emailAddress, school, homeAddress, workAddress) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.phoneNumber = phoneNumber;
  this.emailAddress = emailAddress
  this.school = school;
  this.homeAddress = homeAddress;
  this.workAddress = workAddress
}


Contact.prototype.fullName = function () {
  return this.firstName + " " + this.lastName;
};

// User Interface Logic ---------
function editContact(id) {
  let contact = addressBook.findContact(id);

  $("#new-first-name").val(contact.firstName);
  $("#new-last-name").val(contact.lastName);
  $("#new-phone-number").val(contact.phoneNumber);
  $("#email-address").val(contact.emailAddress)
  $("#school").val(contact.school);
  $("#home-address").val(contact.homeAddress)
  $("#work-address").val(contact.workAddress)
  addressBook.deleteContact(id);
  $("#show-contact").hide();
}

let addressBook = new AddressBook();

function attachContactListeners() {
  $("ul#contacts").on("click", "li", function () {
    showContact(this.id);
    $("#buttons").on("click", ".deleteButton", function () {
      addressBook.deleteContact(this.id);
      $("#show-contact").hide();
      displayContactDetails(addressBook);
    })
    $("#edit").on("click", ".editButton", function () {
      editContact(this.id);
    })
  })
}
function showContact(contactId) {
  const contact = addressBook.findContact(contactId);
  $("#show-contact").show();
  $(".first-name").html(contact.firstName);
  $(".last-name").html(contact.lastName);
  $(".phone-number").html(contact.phoneNumber);
  $(".email-address").html(contact.emailAddress)
  $(".school").html(contact.school);
  $(".home-address").html(contact.homeAddress)
  $(".work-address").html(contact.workAddress)
  let buttons = $("#buttons");
  buttons.empty();
  buttons.append("<button class='deleteButton btn btn-danger' id=" +  contact.id + ">Delete Contact</button>");

  let edit = $("#edit");
  edit.empty();
  edit.html("<button class='editButton btn btn-success' id=" + contact.id + ">Edit Contact</button>");
}

function resetField() {
  $("input#new-first-name").val();
  $("input#new-last-name").val();
  $("input#new-phone-number").val();
  $("input#email-address").val();
  $("input#school").val();
  $("input#home-address").val();
  $("input#work-address").val();
}

function displayContactDetails(addressBookToDisplay) {
  let contactsList = $("ul#contacts");
  let htmlForContactInfo = "";
  Object.keys(addressBookToDisplay.contacts).forEach(function (key) {
    const contact = addressBookToDisplay.findContact(key);
    htmlForContactInfo += "<li id=" + contact.id + ">" + contact.firstName + " " + contact.lastName + "</li>";
  });
  contactsList.html(htmlForContactInfo);
}

$(document).ready(function () {
  attachContactListeners();
  $("form#new-contact").submit(function (event) {
    event.preventDefault();
    const inputtedFirstName = $("input#new-first-name").val();
    const inputtedLastName = $("input#new-last-name").val();
    const inputtedPhoneNumber = $("input#new-phone-number").val();
    const inputtedEmailAddress = $("input#email-address").val();
    const inputtedSchool = $("input#school").val();
    const inputtedHomeAddress = $("input#home-address").val();
    const inputtedWorkAddress = $("input#work-address").val();
    $("input#new-first-name").val("");
    $("input#new-last-name").val("");
    $("input#new-phone-number").val("");
    $("input#email-address").val("");
    $("input#school").val("");
    $("input#home-address").val("");
    $("input#work-address").val("");
    let newContact = new Contact(inputtedFirstName, inputtedLastName, inputtedPhoneNumber, inputtedEmailAddress, inputtedSchool, inputtedHomeAddress, inputtedWorkAddress);
    addressBook.addContact(newContact);
    displayContactDetails(addressBook);

    $(".contacts").last().click(function () {
      $("#show-contact").show();

      $(".first-name").text(newContact.firstName);
      $(".last-name").text(newContact.lastName);
      $(".phone-number").text(newContact.phoneNumber);
      $(".email-address").text(newContact.emailAddress)
      $(".school").text(newContact.school);
      $(".home-address").text(newContact.homeAddress)
      $(".work-address").text(newContact.workAddress)
    })
    resetField();
    event.preventDefault();

  });
});