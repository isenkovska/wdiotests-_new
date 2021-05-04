import LoginPage from  '../pageobjects/login.page';
import ProfilePage from '../pageobjects/portal/profile.portal.page';

describe('Auth', () => {
    beforeEach(() => {
        LoginPage.open();
    });

    afterEach(() => {
        browser.execute('window.localStorage.clear()');
    });

    it('user logs in with valid data', async () => {
        await LoginPage.setLogin(process.env.LOGIN);
        await LoginPage.setPassword(process.env.PASSWORD);
        await LoginPage.clickSubmitButton();
        await ProfilePage.isOpen();
    });

    it('submit button is disabled if login and password are absent', async () => {
        await LoginPage.submitButtonIsDisabled();
    });

    it('fails if invalid data provided ',  async () => {
        await LoginPage.setLogin('example5@gmail.com');
        await LoginPage.setPassword('yfhrjnf');
        await LoginPage.clickSubmitButton();
        await LoginPage.errorToastAppeared();

    });

    it('fails if invalid email provided ',  async () => {
        await LoginPage.setLogin('example5gmail.com');
        await LoginPage.notValidEmailAppeared();

    });

    it('Login input is required',  async () => {
        await LoginPage.setLogin('example@hgfgf.com');
        await LoginPage.emptyLoginInput();
        await LoginPage.loginRequiredError();

    });

    it('password field is required',  async () => {
        await LoginPage.setPassword('egyu');
        await LoginPage.emptyPasswordInput();
        await LoginPage.PasswordRequiredError();

    });
});


