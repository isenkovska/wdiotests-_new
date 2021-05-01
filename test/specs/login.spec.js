import LoginPage from  '../pageobjects/login.page';
import ProfilePage from '../pageobjects/portal/profile.portal.page';

describe('Auth', () => {
    beforeEach(() => {
        LoginPage.open();
    });

    afterEach(() => {
        browser.execute('window.localStorage.clear()');
    });

    it('user logs in with valid data', () => {
        LoginPage.setLogin(process.env.LOGIN);
        LoginPage.setPassword(process.env.PASSWORD);
        LoginPage.clickSubmitButton();
        ProfilePage.isOpen();
    });

    it('submit button is disabled if login and password are absent', () => {
        LoginPage.submitButtonIsDisabled();
    });

    it('fails if invalid data provided ',  () => {
        LoginPage.setLogin('example5@gmail.com');
        LoginPage.setPassword('yfhrjnf');
        LoginPage.clickSubmitButton();
        LoginPage.errorToastAppeared();

    });

    it('fails if invalid email provided ',  () => {
        LoginPage.setLogin('example5gmail.com');
        LoginPage.notValidEmailAppeared();

    });

    it('Login input is required',  () => {
        LoginPage.setLogin('example@hgfgf.com');
        LoginPage.emptyLoginInput();
        LoginPage.loginRequiredError();

    });

    it('password field is required',  () => {
        LoginPage.setPassword('egyu');
        LoginPage.emptyPasswordInput();
        LoginPage.PasswordRequiredError();

    });
});


