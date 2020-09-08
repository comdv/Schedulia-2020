const eventTypePage = require('./event_type_po');
const page = new eventTypePage();

class eventTypeActions {

    goToNewEventTypeMenu() {
        page.newEventTypeButton.waitForDisplayed(2000);
        page.newEventTypeButton.click();
    }

    fillNameDescriptionLinkInputs(eventTypeName, eventTypedescription, eventTypeLink) {
        page.eventNameInputField.waitForDisplayed(2000);
        page.eventNameInputField.clearValue();
        page.eventNameInputField.setValue(eventTypeName);
        page.describeInputField.clearValue();
        page.describeInputField.setValue(eventTypedescription);
        page.linkInputField.clearValue();
        page.linkInputField.setValue(eventTypeLink);
    }

    chooseLocationAsAdress(eventTypeLocationOnMap) {
        page.locationDropDownList.waitForDisplayed(2000);
        page.locationDropDownList.click();
        page.address.waitForDisplayed(2000);
        page.address.click();
        page.locationInputField.clearValue();
        page.locationInputField.setValue(eventTypeLocationOnMap);
        page.coordinates.waitForDisplayed(2000);
        page.coordinates.click();
     }
    // chooseEventTypeColor() {
    //      page.eventColor.waitForDisplayed(2000);
    //      page.eventColor.click();
    //  }
    goToNextPage() {
        page.nextButton.waitForDisplayed(2000);
        page.nextButton.click();
    }

    setTimeDurationAs45() {
        page.eventTimeDuration45.waitForDisplayed(2000);
        page.eventTimeDuration45.click();
    }
    
    setTimeRangeAs30(timeDuration) {
        page.editTimeRangeHyperlink.waitForDisplayed(2000);
        page.editTimeRangeHyperlink.click();
        page.howFarInputField.waitForDisplayed(2000);
        page.howFarInputField.setValue(timeDuration);
        page.applyHyperLink.click();
    }
    saveAndClose() {
        page.saveAndCloseButton.waitForDisplayed(2000);
        page.saveAndCloseButton.click();
    }
    goToEventTypeList(){
        page.backButton.waitForDisplayed(2000);
        page.backButton.click();
    }
}

module.exports = eventTypeActions;
