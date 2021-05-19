/*
Ověř, že tlačíko Přidej kočku přidá kartu s kočkou.
Ověř, že tlačíko Apokalypsa! smaže všechny karty s kočkou.
Ověř, že počítadlo koček reaguje na přidání kočky, smazání kočky, smazání všech koček
Zajisti, aby Tvé testy byly atomické = aby byly na sobě nezávislé, daly se spouštět jednotlivě.
Tvé testy budou okomentovány a dokumentovány.
Použij funkce `before()` a `beforeEach()`
Vše dle principů co jsme si dnes řekli - jeden testcase, jeden assert (expect), describe (popisuje co) / it (popisuje jak) 
*/

describe('Kitty, Kitty, apocalypse', () => {
    beforeEach(() => {
        // go to the webpage https://automation.cervik.repl.co/adding.html
        browser.url('https://automation.cervik.repl.co/adding.html');
    })

    it('button "Pridej kocku" adds one cat', () => {
        let addCat = browser.$('#addItem');
        addCat.click(); // adds one card of a cat
        let catImage = browser.$$('.card-img-top'); // find all images with cats and save them into an array
        // assertion that there is 1 image of a cat
        expect(catImage).toBeElementsArrayOfSize(1)
    });

    it('button "Pridej kocku" adds 10 cats', () => {
        // adds 10 cards of a cat
        for (let i = 0; i < 10; i++) {
            let addCat = browser.$('#addItem');
            addCat.click();
        }
        let catImage = browser.$$('.card-img-top');
        // assertion that there are 10 images of a cat
        expect(catImage).toBeElementsArrayOfSize(10)
    });

    it('button "Apokalypsa" deletes all cats', () => {
        // adds 3 cats
        for (let i = 0; i < 3; i++) {
            browser.$('#addItem').click();
        }
        let arrayOfCatsImages = browser.$$('.card-img-top'); // find all images with cats and save them into an array
        let apokalypse = browser.$('#removeAll')
        apokalypse.click();
        // assertion that there is no image of a cat
        expect(arrayOfCatsImages).toBeElementsArrayOfSize(0);
    });

    describe('Cat counter', () => {
        let numberOfCats = 3;
        beforeEach(() => {
            for (let i = 0; i < numberOfCats; i++) {
                let addCat = browser.$('#addItem')
                addCat.click();
            }
        });

        it('reacts at adding a cat', () => {
            let counter = parseInt(browser.$('#counter').getText());
            // assertion that counter shows correct number of cats
            expect(counter).toEqual(numberOfCats);
        });

        it('reacts at removing a cat', () => {
            let removeOneCat = browser.$('#removeItem')
            removeOneCat.click();
            let counter = parseInt(browser.$('#counter').getText());
            // assertion that counter shows correct number of cats
            expect(counter).toEqual(numberOfCats - 1);
        });

        it('reacts at apocalypse', () => {
            let apocalypse = browser.$('#removeAll');
            apocalypse.click();
            let counter = parseInt(browser.$('#counter').getText());
            // assertion that counter shows correct number of cats
            expect(counter).toEqual(0);

        });
    });
});