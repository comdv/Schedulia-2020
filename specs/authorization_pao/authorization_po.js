class AuthorizationPage {

    get emailFieldLogIn() {return $('//*[@id="email"]')};
    get passwordFieldLogIn() {return $('//*[@id="password"]')};
    get loginButton() {return $('//*[@id="app"]/div/div[1]/div/div[2]/div/div[2]/div[2]/div/div/form/div[5]/div/div[1]/button/span')};
}

module.exports = AuthorizationPage;