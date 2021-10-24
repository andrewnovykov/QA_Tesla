const Page = require("../../pageobjects/page");
const ContactsPage = require("../../pageobjects/public/contacts-page");
const credentials = require("../../data/credentials.json");

const expect = require("chai").expect;
const faker = require("faker");

describe("Public Pages | Contact", () => {
  beforeEach(function () {
    Page.open("contact");
  });

  it.skip("User shoud be able to submit Contact Form on Contact page", () => {
    ContactsPage.$contactFormTitle.waitForDisplayed();
    Page.moveToElement(ContactsPage.$submitContactFormButton);
    ContactsPage.$contactFormInputFirstName.setValue(faker.name.firstName());
    ContactsPage.$contactFormInputLastName.setValue(faker.name.lastName());
    ContactsPage.$contactFormInputPhone.setValue(
      faker.phone.phoneNumberFormat()
    );
    ContactsPage.$contactFormInputEmail.setValue(faker.internet.email());
    ContactsPage.$contactFormInputZipCode.setValue(
      faker.address.zipCode("#####")
    );
    ContactsPage.$contactFormTopicSelector.click();
    ContactsPage.$contactFormTopicSelectorFirstOption.click();
    ContactsPage.$contactFormTextAreaForMessage.setValue(
      faker.lorem.paragraph()
    );
    ContactsPage.$submitContactFormButton.click();
    ContactsPage.$modalWindowBody.waitForDisplayed();
    expect(ContactsPage.$modalWindowHeader.getText()).to.equal(
      credentials.public.contactPage.modalSuccessWindowMessageTittle
    );
  });

  it("User shoud be able to land on Contact page", () => {
    ContactsPage.$contactPageTitle.waitForDisplayed();
    expect(browser.getUrl()).to.equal(credentials.public.contactPage.url);
    expect(browser.getTitle()).to.equal(
      credentials.public.contactPage.pageTitle
    );
  });
});