// ukazka jak muze vypadat VICE testcasu jedne "feature" / stranky

// CO BUDEME TESTOVAT
describe('Page automation selectors', () => {
    // TEST-CASE - jakym zpusobem to budeme testovat
    it('has correct sum of paragraphs', () => {
        // KROKY PRO OVERENI 
        browser.url('https://automation.cervik.repl.co/selectors.html');
        let paragraphsOfStory = browser.$$('section#pohadka p')

        // OVERENI - ASSERTION
        expect(paragraphsOfStory).toBeElementsArrayOfSize(16)
    });

    it('has correct header of fairytale', () => {
        browser.url('https://automation.cervik.repl.co/selectors.html');
        let headerOfStory = browser.$('#pohadka h2')

        expect(headerOfStory).toHaveText('O Budulínkovi')
    })
});
