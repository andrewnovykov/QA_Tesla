const Page = require("../../pageobjects/page");
const HomePage = require("../../pageobjects/public/home-page");
const credentials = require("../../data/credentials.json");

const expect = require("chai").expect;

describe("Public Pages | Home Page", () => {
  beforeEach(function () {
    Page.open(" ");
  });

  it("User shoud be able to land on Home page", () => {
    HomePage.$promotedCarName.waitForDisplayed();
    expect(browser.getUrl()).to.equal(credentials.public.homePage.url);
    expect(browser.getTitle()).to.equal(credentials.public.homePage.pageTitle);
  });
});