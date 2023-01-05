console.log(10 + 1)
export const verify = async (browser) => {
    browser
        .url('https://www.tesla.com/account')
        .waitForElementVisible('body', 1000)
        .assert.title('Tesla Account')
        .assert.visible('#email')
        .assert.visible('#password')
        .assert.visible('#login')
        .end();
}