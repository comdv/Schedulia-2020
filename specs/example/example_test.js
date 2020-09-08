const authorizationActions = require('../authorization_pao/authorization_pa');
const eventTypeActions = require('../event_type_pao/event_type_pa');
const credentials = require('../dataCreds.json')


const eventTypeSteps = new eventTypeActions();
const authorizationSteps = new authorizationActions();


 describe('Create new Event Types', () => {
   beforeEach(() => {
        browser.url(credentials.startUrl);
        browser.maximizeWindow();
    });

    afterEach(() => {
        browser.reloadSession();
    });

    it('Create new Event Types (location on map, duration 45, time range 30)', () => {
        authorizationSteps.Authorization(credentials.loginEmail, credentials.loginPassword);
        eventTypeSteps.goToNewEventTypeMenu();
        eventTypeSteps.fillNameDescriptionLinkInputs(credentials.eventTypeName, credentials.eventTypedescription, credentials.eventTypeLink);
        eventTypeSteps.chooseLocationAsAdress(credentials.eventTypeLocationOnMap);
     // eventTypeSteps.chooseEventTypeColor();
        eventTypeSteps.goToNextPage();
        eventTypeSteps.setTimeDurationAs45();
        eventTypeSteps.setTimeRangeAs30("30");
        eventTypeSteps.saveAndClose();
        eventTypeSteps.goToEventTypeList();
    });

});