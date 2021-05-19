// ukazka jak muze vypadat VICE testcasu jedne "feature" / stranky

// CO BUDEME TESTOVAT
describe('Page automation selectors', () => {

    describe('Section ZADANI', ()=>{
        it('has 8points what to do', ()=>{})
        it('has gray background', ()=>{})
    })

    describe('section HINT', ()=>{
        it('has correct text', ()=>{})
        it('has light yellow background', ()=>{})
    })

    describe('section fairytale', ()=>{
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
    })

    
});
