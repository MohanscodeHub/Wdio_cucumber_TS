export const selectDropdown = async (elements: Promise<WebdriverIO.ElementArray>, value: string) => {

    const element = await elements;

    for (let i = 0; i < element.length; i++) {
        const elem = await (elements[i]).getAttribute('value')
        if (elem === value) {
            await (elements[i]).click()
            break;
        }

    }

}


export const setText = async (element: Promise<WebdriverIO.Element>, text: string) => {

    await (await element).setValue(text)

}



export const selectVisibleText = async (element: Promise<WebdriverIO.Element>, text: string) => {

    await (await element).selectByVisibleText(text)

}



export const click = async (element: Promise<WebdriverIO.Element>) => {

    await (await element).click()

}