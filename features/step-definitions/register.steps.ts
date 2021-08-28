import { Given, When, Then } from '@cucumber/cucumber'

Given(/^I am on practice page \"([^\"]*)\"$/, async function (appurl: string) {
    await browser.url(appurl)
    await browser.maximizeWindow()
});

Then(/^I validat page header \"([^\"]*)\"$/, async function (headertext: string) {

    const header = $("//h1")

    expect(await header.getText()).toEqual(headertext)

});


Then(/^I enter firstname (.+) and lastname (.+)$/, async function (fname: string, lname: string) {

    const firstname_input = $('[name=firstname]')
    const Lastname_input = await $('[name=lasttname]')


    await (await firstname_input).setValue(fname)
    await (await Lastname_input).setValue(lname)
});


When(/^I select gender (.+) years (.+) favorite chai (.+) and reason (.+)$/, async function (gender: string, yrs: string, favchai: string, reason: string) {

    const gender_radio = await $$('[name=sex]')
    const experience_radio = await $$('[name=exp]')
    const favchai_radio = await $$('[name=sex]')
    const whychai_radio = await $$('[name=sex]')


    for (let i = 0; i < gender_radio.length; i++) {

        const element = await (gender_radio[i]).getAttribute('value')
        if (element === gender) {
            await (gender_radio[i]).click()
            break;
        }


    }
    for (let i = 0; i < experience_radio.length; i++) {

        const element = await (experience_radio[i]).getAttribute('value')
        if (element === yrs) {
            await (experience_radio[i]).click()
            break;
        }


    }
    for (let i = 0; i < favchai_radio.length; i++) {

        const element = await (favchai_radio[i]).getAttribute('value')
        if (element === favchai) {
            await (favchai_radio[i]).click()
            break;
        }


    }


    for (let i = 0; i < whychai_radio.length; i++) {

        const element = await (whychai_radio[i]).getAttribute('value')
        if (element === reason) {
            await (whychai_radio[i]).click()
            break;
        }


    }



});

When(/^I select continent (.+) and commands (.+)$/, async function (continent: string, command: string) {

    const continent_dropdown = $('#continents');
     const selcommands_multiselect = $('#selenium_commands');

    await (await continent_dropdown).selectByVisibleText(continent)
    await (await continent_dropdown).selectByVisibleText(command)

    await browser.pause(5000)


});

When(/^I click on submit button$/, async () => {

    const submit_btn = $('submit')
    await submit_btn.click()
});

