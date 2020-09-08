const authorizationActions = require('./authorization_pao/authorization_pa');
const eventTypeActions = require('../event_type_pao/event_type_pa');
const assert = require('assert')
const credentials = require('./dataCreds.json')


const eventTypeSteps = new eventTypeActions();
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



 describe('Create new Event Types', () => {
   beforeEach(() => {
        browser.url(credentials.startUrl);
        browser.maximizeWindow();
        registrationSteps.AuthorizateValid(credentials.validEmail, credentials.password);
    });

    afterEach(() => {
        browser.reloadSession();
    });

    it('Create new Event Types (location on map, duration 45, time range 30)', () => {
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