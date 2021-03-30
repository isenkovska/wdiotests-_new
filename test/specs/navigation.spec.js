import MainPage from '../pageobjects/portal/main.portal.page';
import CoursesPage from '../pageobjects/portal/courses.portal.page';
import CardsPage from '../pageobjects/portal/cards.portal.page'

describe ('Navigation', () => {
    before( () => {
        browser.login('isenkovska@gmail.com', 'yfhrjnf243318');
    });

    beforeEach(() => {
        MainPage.open();
    });

    it('courses page opens', () => {
        MainPage.goToCourses();
        CoursesPage.isOpen();
    });

    it('cards page opens', () => {
        MainPage.goToCards();
        CardsPage.isOpen();
    });

});
