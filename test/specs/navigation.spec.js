import MainPage from '../pageobjects/portal/main.portal.page';
import CoursesPage from '../pageobjects/portal/courses.portal.page';
import CardsPage from '../pageobjects/portal/cards.portal.page';
import DiaryPage from '../pageobjects/portal/diary.portal.page';

describe ('Navigation', () => {
    before( () => {
        browser.login(process.env.LOGIN, process.env.PASSWORD);
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

    it('diary page opens', () => {
        MainPage.goToDiary();
        DiaryPage.isOpen();
    });

});
