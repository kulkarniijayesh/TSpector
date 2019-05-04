import { browser } from "protractor"
import { BasePage } from "../Core/BasePage";
import { TextBox } from "../Core/WebElements/TextBox";
import { Button } from "../Core/WebElements/Button";
import { Label } from "../Core/WebElements/Label";

export class LoginPage extends BasePage {

    public UserName: TextBox = new TextBox("id", "_Input");
    public Password: TextBox = new TextBox("id", "main_PasswordTextBox");
    public proceedButton: Button = new Button("id", "main_LoginButton");
    public ErrorLabel: Label = new Label("id", "LoginError");

    constructor() {
        super("https://d1.fisintegratedpayables.com/fis/login.aspx?ReturnUrl=%2ffis%2fCustomer%2fUserAdministration.aspx", "llo");
        //super("http://idp-apex-ui-dev.sdlocpapp.fisdev.local/IdPRI-4.15.0/apexdev/", "")
    }

    navigateTo(): void {
        browser.get(this.pageURL)
    }
}