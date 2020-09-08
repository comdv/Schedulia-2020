const authorizationPage = require('../authorization_pao/authorization_po');
const page = new authorizationPage();

class authorizationActions {

    Authorization(loginEmail, loginPassword) {
        page.emailFieldLogIn.waitForDisplayed(2000);
        page.emailFieldLogIn.clearValue();
        page.emailFieldLogIn.setValue(loginEmail);
        page.passwordFieldLogIn.clearValue();
        page.passwordFieldLogIn.setValue(loginPassword);
        page.loginButton.click();
    }
    
}
module.exports = authorizationActions;
