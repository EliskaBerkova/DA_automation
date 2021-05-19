// ZADANI: 
// Rozděl jeden test-case mezi více
// 1 test-case = kroky + 1 expect
// Pojmenuj vhodně testcasy


describe('03 Elements', () => {
    it('should pass correctly', () => {
        // jdi na adresu
        browser.url('https://automation.cervik.repl.co/selectors.html');

    });

    it('has correct header of fairytale', () => {
        // jdi na adresu
        browser.url('https://automation.cervik.repl.co/selectors.html');
        let headerOfStory = browser.$('#pohadka h2')
        expect(headerOfStory).toHaveText('O Budulínkovi')
    });

    it('paragraphs have correct count', () => {
        // jdi na adresu
        browser.url('https://automation.cervik.repl.co/selectors.html');
        let paragraphsOfStory = browser.$$('#pohadka p')
        expect(paragraphsOfStory).toBeElementsArrayOfSize(16)
    });

    it('contains the word "listicky" in the paragraph', () => {
        // jdi na adresu
        browser.url('https://automation.cervik.repl.co/selectors.html');
        let foxsInStory = browser.$('p*=lištičky')
        expect(foxsInStory).toHaveTextContaining('lištičky')
    });

    it('contains picture in the pohadka section', () => {
        // jdi na adresu
        browser.url('https://automation.cervik.repl.co/selectors.html');
        let imageOfStory = browser.$('#pohadka img')
        expect(imageOfStory).toHaveAttribute('src', 'https://automation.cervik.repl.co/images/budulinek.jpg')
    });


    it('after clicking 10times count shows 10', () => {
        // jdi na adresu
        browser.url('https://automation.cervik.repl.co/selectors.html');
        let giveLikeButton = browser.$('#like-button')
        let likeCounter = browser.$('#lvlAwesome')
        likeCounter.scrollIntoView()
        for (let i = 0; i < 10; i = i + 1) {
            // element, ktery jsme nasli na radku 12 a ted na nej klikame
            giveLikeButton.click()
            browser.pause(250)
        }
        expect(likeCounter).toHaveText('10') // overi, ze pocitadlo ukazuje spravnou hodnotu - 10
    });
});

    //let headerOfStory = browser.$('#pohadka h2')       // najdi nadpis pohadky O Budulinkovi
    // let paragraphsOfStory = browser.$$('#pohadka p')  // najdi vsechny paragraphs pohadky O Budulinkovi
    // let foxsInStory = browser.$('p*=lištičky')         // najdi paragraph, kde se vyskytuje slovo "lištičky"
    // let imageOfStory = browser.$('#pohadka img')        // najdi ilustraci v pohadce o budulinkovi
    // let giveLikeButton = browser.$('#like-button')      // najdi tlacitko "Dej like!" na konci pohadky
    // let likeCounter = browser.$('#lvlAwesome')         // najdi pocitadlo pod pohadkou

    // expect(headerOfStory).toHaveText('O Budulínkovi')       // overi se, ze element v promenne headerOfStory ma dany text
    // expect(paragraphsOfStory).toBeElementsArrayOfSize(16)   // overi, ze pocet elementu v poli se rovna 16
    // expect(foxsInStory).toHaveTextContaining('lištičky')    // overi, ze v danem elementu jsou opravdu lištičky
    // // overi, ze dany element ma cestu k obrazku, takze to je ten spravny image
    // expect(imageOfStory).toHaveAttribute('src', 'https://automation.cervik.repl.co/images/budulinek.jpg')

        //scrollIntoView zname - scrollni dolu, at vidis, co se deje
        // likeCounter.scrollIntoView()
        // for (let i = 0; i < 10; i = i + 1) {
        //     // element, ktery jsme nasli na radku 12 a ted na nej klikame
        //     giveLikeButton.click()
        //     browser.pause(250)
        // }
        // expect(likeCounter).toHaveText('10') // overi, ze pocitadlo ukazuje spravnou hodnotu - 10