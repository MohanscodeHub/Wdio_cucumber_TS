import { Given, When, Then } from '@cucumber/cucumber'
//import waitexpage from "src/pages/waitex.page"

Given(/^I am on dynamic loading (.+) page$/, async (appurl: string) => {
    await browser.maximizeWindow()
    await browser.url(appurl)
});

When(/^I click on start button$/, async () => {

    const startbtn =$('#start button')
    await( await startbtn).click()
    
});

Then(/^I validate loading icon$/, async () => {

    const loadingIco =$('#loading')
    const msg =$('#finish h4')
    await (await loadingIco).waitForDisplayed({timeout:5000})
    await (await loadingIco).waitForDisplayed({reverse:true,timeout:5000}) // this will wait for the element to disappaear
  //  await (await msg).waitForDisplayed({timeout:10000})
    await browser.waitUntil(async()=>await(await msg).getText()==='Hello world!',{ 
        timeout:120000,
        timeoutMsg:"element is not displayed in 10 sec"
    })
   // await expect(msg).toBeDisabled()
 
});