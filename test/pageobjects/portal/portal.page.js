import Page from "../page";

export default class PortalPage extends Page {
    get LinkCourses() {return $('[data-qa="topmenu-Courses"]'); }
    get LinkCards() {return $('[data-qa="topmenu-Cards"]'); }
    get LinkDiary() {return $('[data-qa="topmenu-Diary"]');}
    get LinkChallenges() {return $('[data-qa="topmenu-Challenges"]');}

    goToCourses() {
        this.LinkCourses.click();
    }

    goToCards() {
        this.LinkCards.click();
    }

    goToDiary() {
        this.LinkDiary.click();
    }

    goToChallenges() {
        this.LinkChallenges.click();
    }

}
