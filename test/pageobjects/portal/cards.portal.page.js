import PortalPage from "./portal.page";

class CardsPage extends PortalPage {
    get sectionHeader () {return $ ('section>h1'); }

    open () {
        return super.open('/flash');
    }

    isOpen() {
        expect(browser).toHaveUrlContaining('/flash');
        expect(this.sectionHeader).toHaveText('Interview practice cards');
    }
}

export default new CardsPage();
