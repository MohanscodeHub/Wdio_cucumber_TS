import { Given, When, Then } from '@cucumber/cucumber'
import { BASE_URI } from 'src/config/APIConfig';
import UsersPage from 'src/pages/Users.page';
import supertest from 'supertest'
import { APICalls } from 'src/enums/APICalls';

const request = supertest(BASE_URI)
let response: supertest.Response; // response type from supertest -class level varaible can be used through out the class

const payload = {
    "name": "Mohan",
    "job": "tester"
}

Given(/^I am on page (.+)$/, async (pageurl: string) => {
    await UsersPage.openApp(pageurl);
});

When(/^I perform (.+) user search$/, async (endpoint: string) => {
    await UsersPage.selectMethod(APICalls.GET)
    await UsersPage.enterAPIUrl(BASE_URI + endpoint);
    await UsersPage.clickOnAjaxBtn();
})


When(/^I make GET (.+) api call$/, async (endpoint: string) => {
    response = await request.get(endpoint)
    console.log("API_response" +response.toString());
    console.log(response.statusCode.toString());
})

Then(/^I validate the search result$/, async () => {
    const ui_status = await UsersPage.getStatusText();
    const ui_response = JSON.parse(await UsersPage.getOutputText()); // parsing string tojson from UI
    console.log( "UI_status "+ui_status)
    console.log("UI_response" +ui_response)
   // expect(ui_status).toContain(response.statusCode.toString())
   // expect(ui_response).toEqual(response.body)
   // expect(ui_response.data.email).toEqual(response.body.data.email)

   var answer = 43;




When(/^I perform create use search for api (.+)$/, async (service: string) => {
    await UsersPage.selectMethod(APICalls.POST)
    await UsersPage.enterAPIUrl(BASE_URI + service);
    await UsersPage.clickOnAddParamBtn()
    await UsersPage.enterFirstParams("name", payload.name)
    await UsersPage.clickOnAddParamBtn()
    await UsersPage.enterSecondParams("job", payload.job)
    await UsersPage.clickOnAjaxBtn();
})

When(/^I make POST (.+) api call$/, async (endpoint: string) => {
    response =  await request
                .post(endpoint)
                .send(payload)
                .set('content-type', 'application/json');
})

Then(/^I validate the create user search result$/, async () => {
    const ui_status = await UsersPage.getStatusText();
    const ui_response = JSON.parse(await UsersPage.getOutputText());

    expect(ui_status).toContain(response.statusCode.toString())
    expect(ui_response.name).toEqual(response.body.name)
    expect(ui_response.job).toEqual(response.body.job)
})

})