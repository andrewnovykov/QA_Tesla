"use strict";

class ContactsPage {
  get $contactFormTitle() {
    return $("h2=Submit a question or comment");
  }
  get $submitContactFormButton() {
    return $('[type="Submit"]');
  }
  get $contactPageTitle() {
    return $("h1=Contact");
  }
  get $contactFormInputFirstName() {
    return $("#edit-firstname");
  }
  get $contactFormInputLastName() {
    return $("#edit-lastname");
  }
  get $contactFormInputPhone() {
    return $("#edit-phone");
  }
  get $contactFormInputEmail() {
    return $("#edit-email");
  }
  get $contactFormInputZipCode() {
    return $("#edit-postalcode");
  }
  get $contactFormTopicSelector() {
    return $("#edit-topic");
  }
  get $contactFormTopicSelectorFirstOption() {
    return $('[value="ordering-a-tesla-energy-product"]');
  }
  get $contactFormTextAreaForMessage() {
    return $("#edit-question-comment");
  }
  get $modalWindowBody() {
    return $(".modal-body");
  }
  get $modalWindowHeader() {
    return $(".modal-header");
  }
}

module.exports = new ContactsPage();