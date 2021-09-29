class Page {
  open(path) {
    return browser.url(`https://www.tesla.com/${path}`);
  }

  moveToElement(element) {
    element.moveTo();
  }
}

module.exports = new Page();