class EventTypePage {


    get newEventTypeButton() {return $('//*[@id="app"]/div/main/div/div[2]/div[2]/div[2]/div[2]/div/button/span')};
    get eventNameInputField() {return $('//*[@id="event-type-name"]')};
    get locationDropDownList() {return $('//*[@id="app"]/div/main/div/div[2]/div/div/div/div[1]/div/div/div/div/form/div[4]/div/div/div[1]/div[1]/div[1]')};
    get address() {return $('//*[@id="event-type-address-algolia"]')};
    get coordinates() { return $('//span[@app-adress='/Kyiv/']')}
    get locationInputField() {return $('//*[@id="app"]/div/main/div/div[2]/div/div/div[2]/div/form/div[4]/div[2]/span/input')};
    get describeInputField() {return $('//*[@id="event-type-description"]')};
    get linkInputField() {return $('//*[@id="event-type-slug"]')};
    get eventColor() {return $('//*[@id="app"]/div/main/div/div[2]/div/div/div[2]/div/form/div[10]/div/div/div[5]/div[3]')};
    get nextButton() {return $('//*[@id="app"]/div/main/div/div[2]/div/div/div[2]/div/form/div[11]/button/span')};
    get eventTimeDuration45() {return $('//*[@id="app"]/div/main/div/div[2]/div/div/div/div[2]/div/div/div/div/form/div[2]/div[1]/div/div[1]/div/div[3]/div/div')};
    get editTimeRangeHyperlink() {return $('//*[@id="app"]/div/main/div/div[2]/div/div/div/div[2]/div/div/div/div/form/div[4]/button/span')};
    get howFarInputField() {return $('//*[@id="event-type-days-far-into-future-days"]')};
    get applyHyperLink() {return $('//*[@id="app"]/div[3]/div/div/div[2]/button[1]/span')};
    get saveAndCloseButton() {return $('//*[@id="app"]/div/main/div/div[2]/div/div/div/div[2]/div/div/div/div/form/div[11]/div/button[2]/span')};
    get backButton() {return $('//*[@id="title"]/div/div/div/h1/div/div[1]/a/button/span/span')};
    get eventTypeDiv() {return $('//*[@id="app"]/div/main/div/div[2]/div[2]/div[3]/div/div')};
}

module.exports = EventTypePage;