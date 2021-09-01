import { Given, When, Then } from '@cucumber/cucumber'
import chaiPage from '../../src/pages/register.page'

Given(/^I am on practice page \"([^\"]*)\"$/, async  (appurl: string)=> {
    await browser.url(appurl)
    await browser.maximizeWindow()
});

Then(/^I validat page header \"([^\"]*)\"$/, async (header: string)=> {

    await expect(chaiPage.getHeader()).toHaveText(header)
});


Then(/^I enter firstname (.+) and lastname (.+)$/, async (fname: string, lname: string)=> {


    await chaiPage.enterFirstName(fname)
    await chaiPage.enterLastName(lname)

});


When(/^I select gender (.+) years (.+) favorite chai (.+) and reason (.+)$/, async  (gender: string, yrs: string, favchai: string, reason: string)=> {

    //const gender_radio = await $$('[name=sex]')
    //const experience_radio = await $$('[name=exp]')
    //const favchai_radio = await $$('[id*=tea]')
    // const whychai_radio = await $$('[name=tool]')

    //for (let i = 0; i < gender_radio.length; i++) {
    //   const element = await (gender_radio[i]).getAttribute('value')
    // if (element === gender) {
    //   await (gender_radio[i]).click()
    //  break;
    // }
    //}

    await chaiPage.selectGender(gender)
    await chaiPage.selectExperience(yrs)

    await chaiPage.selectFavChai(favchai)
    await chaiPage.selectReason(reason)
});

When(/^I select continent (.+) and commands (.+)$/, async function (continent: string, command: string) {

    await chaiPage.selectContinent(continent)
    await chaiPage.selectSeleniumCommand(command)
    await browser.pause(5000)
});

When(/^I click on submit button$/, async () => {

    // await (await chaiPage.submit_btn).click()

    await chaiPage.clickonSubmitBtn()
});

