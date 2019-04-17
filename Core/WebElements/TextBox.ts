import { by, element, ElementFinder } from "protractor";

export class TextBox {

    private locatorValue: string

    public get(): ElementFinder {
        return element(by.id(this.locatorValue));
    }

    constructor(locatorValue: string) {
        this.locatorValue = locatorValue;
    }

    public async type(inputText: string) {
        await this.get().sendKeys(inputText)
        console.log(inputText);
    }
}