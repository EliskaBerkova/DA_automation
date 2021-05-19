/*
ZADANI:
    Odstraň duplicity 
    Přesuň browser.url() do before()
    Vypiš před každým testcasem(it()) aktuální cas - new Date()
    Zkus si pustit poslední test-case použitím it.only
    Zkus ignorovat test-casy použitím xit, it.skip

*/


// describe('03 Elements', () => {
//     beforeEach(() => {
//         browser.url('https://automation.cervik.repl.co/selectors.html')
//         console.log(new Date())
//     })

//     it('test mimo pohadku', () => {
//         //browser.url('https://automation.cervik.repl.co/selectors.html');
//         let giveLikeButton = browser.$('#like-button')      // najdi tlacitko "Dej like!" na konci pohadky
//         let likeCounter = browser.$('#lvlAwesome')          // najdi pocitadlo pod pohadkou

//         //scrollIntoView zname - scrollni dolu, at vidis, co se deje
//         likeCounter.scrollIntoView()
//         for (let i = 0; i < 10; i = i + 1) {
//             // element, ktery jsme nasli a ted na nej klikame
//             giveLikeButton.click()
//             browser.pause(500)
//         }

//         expect(likeCounter).toHaveText('10') // overi, ze pocitadlo ukazuje spravnou hodnotu - 10
//     })

//     describe('fairytale', () => {

//         it('test1', () => {
//             browser.url('https://automation.cervik.repl.co/selectors.html');
//             // jdi na adresu
//             let headerOfStory = browser.$('#pohadka h2')            // najdi nadpis pohadky O Budulinkovi
//             expect(headerOfStory).toHaveText('O Budulínkovi')       // overi se, ze element v promenne headerOfStory ma dany text
//         });

//         it('test2', () => {
//             browser.url('https://automation.cervik.repl.co/selectors.html');
//             let paragraphsOfStory = browser.$$('#pohadka p')        // najdi vsechny paragraphs pohadky O Budulinkovi
//             expect(paragraphsOfStory).toBeElementsArrayOfSize(16)   // overi, ze pocet elementu v poli se rovna 16
//         })
//         it('test3', () => {
//             browser.url('https://automation.cervik.repl.co/selectors.html');
//             let foxsInStory = browser.$('p*=lištičky')              // najdi paragraph, kde se vyskytuje slovo "lištičky"
//             expect(foxsInStory).toHaveTextContaining('lištičky')    // overi, ze v danem elementu jsou opravdu lištičky
//         })
//         it('test4', () => {
//             browser.url('https://automation.cervik.repl.co/selectors.html');
//             let imageOfStory = browser.$('#pohadka img')        // najdi ilustraci v pohadce o budulinkovi
//             expect(imageOfStory).toHaveAttribute('src', 'https://automation.cervik.repl.co/images/budulinek.jpg')
//         })
//     })
// })

describe('03 Elements', () => {
    beforeEach(() => {
        browser.url('https://automation.cervik.repl.co/selectors.html')
        console.log(new Date())
    })

    it('test mimo pohadku', () => {
        //browser.url('https://automation.cervik.repl.co/selectors.html');
        let giveLikeButton = browser.$('#like-button')      // najdi tlacitko "Dej like!" na konci pohadky
        let likeCounter = browser.$('#lvlAwesome')          // najdi pocitadlo pod pohadkou

        //scrollIntoView zname - scrollni dolu, at vidis, co se deje
        likeCounter.scrollIntoView()
        for (let i = 0; i < 10; i = i + 1) {
            // element, ktery jsme nasli a ted na nej klikame
            giveLikeButton.click()
            browser.pause(500)
        }

        expect(likeCounter).toHaveText('10') // overi, ze pocitadlo ukazuje spravnou hodnotu - 10
    });

    describe('fairytale', () => {
        it('header has text "O Budulinkovi"', () => {
            //browser.url('https://automation.cervik.repl.co/selectors.html');
            // jdi na adresu
            let headerOfStory = browser.$('#pohadka h2')            // najdi nadpis pohadky O Budulinkovi
            expect(headerOfStory).toHaveText('O Budulínkovi')       // overi se, ze element v promenne headerOfStory ma dany text
        });

        it('paragraphs contains correct count', () => {
            //browser.url('https://automation.cervik.repl.co/selectors.html');
            let paragraphsOfStory = browser.$$('#pohadka p')        // najdi vsechny paragraphs pohadky O Budulinkovi
            expect(paragraphsOfStory).toBeElementsArrayOfSize(16)   // overi, ze pocet elementu v poli se rovna 16
        })
        it('paragraph contains "listicky" word', () => {
            //browser.url('https://automation.cervik.repl.co/selectors.html');
            let foxsInStory = browser.$('p*=lištičky')              // najdi paragraph, kde se vyskytuje slovo "lištičky"
            expect(foxsInStory).toHaveTextContaining('lištičky')    // overi, ze v danem elementu jsou opravdu lištičky
        })
        it('pohadka section contains image', () => {
            //browser.url('https://automation.cervik.repl.co/selectors.html');
            let imageOfStory = browser.$('#pohadka img')        // najdi ilustraci v pohadce o budulinkovi
            expect(imageOfStory).toHaveAttribute('src', 'https://automation.cervik.repl.co/images/budulinek.jpg')
        })
    })
});