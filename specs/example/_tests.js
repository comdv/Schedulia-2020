const authorizationActions = require('./authorization_pao/authorization_pa');
const listActions = require('./event_type_pao/event_type_pa');
const assert = require('assert')
const credentials = require('./dataCreds.json')


const listSteps = new listActions();
const authorizationSteps = new authorizationActions();


describe('Authorization', () => {
    beforeEach(() => {
        browser.url(credentials.startUrl);
        browser.maximizeWindow();
    });

    afterEach(() => {
        browser.reloadSession();
    });


    it('Authorization', () => {
       authorizationSteps.Authorization("testconnection@acetesz.com", "12345678");

        const url = new URL(browser.getUrl());
        assert.equal(url, 'http://dev.schedulia.xyz/')
    });


});



 describe('Создание/удаление списка', () => {

   beforeEach(() => {
        browser.url(credentials.startUrl);
        browser.maximizeWindow();
        registrationSteps.AuthorizateValid(credentials.validEmail, credentials.password);
    });

    afterEach(() => {
        browser.reloadSession();
    });

    it('Создание списка', () => {
        listSteps.goToMyListMenu()
        listSteps.creatingNewList(credentials.listName);
        listSteps.checkListExist();
    });

    it('Удаление списка', () => {
        listSteps.goToMyListMenu();
        listSteps.creatingNewList(credentials.listName);
        listSteps.deleteList();
        listSteps.checkListWasDelete();
    });

});