
// describe('Web Czechitas', () => {
//     it('se otevře v prohlížeci a počká 5sekund než se prohlížeč zavře', () => {
//         // Jdi na adresu https://www.czechitas.cz/cs
//         browser.url('https://www.czechitas.cz/cs/');

//         // Pockej 5sekund nez provedes dalsi prikaz
//         browser.pause(5000)
//         // ukol 3b
//         // let datum = new Date().valueOf()
//         //browser.saveScreenshot(`./${datum}-screen-main-page.png`)

//         // ukol 3-bonus
//         let datum = new Date();
//         // let datestring = datum.getFullYear() + "-" + (datum.getMonth() + 1) + "-" + datum.getDate() + "_" + datum.getHours() + "-" + datum.getMinutes() + "-" + datum.getSeconds();
//         let datestring = `${datum.getFullYear()}-${(datum.getMonth() + 1)}-${datum.getDate()}_${datum.getHours()}-${datum.getMinutes()}-${datum.getSeconds()}`;
//         browser.saveScreenshot(`./${datestring}-screen-main-page.png`)
//         // Dalsi prikaz tady momentalne neni, takze po 5sekundach se prohlizec zavre.
//         // Exekuce testu skončí a Ty můžeš vidět výsledky testu v terminálu.

//         // Zde pak můžeš přidat další příkazy
//         // Zkus například tyto dva příkazy odkomentovat a spustit npm test znovu - co se stane?
//         // browser.maximizeWindow()
//         // browser.pause(5000)
//         // browser.$('#footer').scrollIntoView()
//         // browser.pause(5000)
//         //browser.$('.newsletter-email').setValue("muj@email.com")
//         // browser.fullscreenWindow()
//         // browser.pause(5000)
//         // let adresa = browser.getUrl()
//         // console.log(`Webova adresa je: ${adresa}`)
//         // // browser.minimizeWindow()
//         // // browser.pause(5000)
//         // let nazev = browser.getTitle()
//         // console.log(`Nazev stranky je: ${nazev}`)
//         // let delkaKodu = browser.getPageSource().length
//         // console.log(`Delka zdrojoveho kodu HTML je: ${delkaKodu}`)

//     });
// });

// describe('Seznam', () => {
//     it('se otevře v prohlížeci a počká 5sekund než se prohlížeč zavře', () => {
//         // Jdi na adresu https://www.czechitas.cz/cs
//         browser.url('https://seznam.cz');
//         browser.pause(3000)
//         browser.url("")
//         browser.pause(10000)
//         browser.url('/portfolio')
//         browser.pause(3000)
//         //browser.url("")
//         //browser.pause(3000)
//         browser.back()
//         browser.pause(3000)
//         browser.forward()
//         browser.pause(3000)
//         browser.refresh()
//         browser.pause(3000)
//     });
// });

// describe('Domaci ukol 1', () => {
//     it('a jeho exekuce', () => {
//         browser.url('https://www.czechitas.cz');
//         browser.saveScreenshot('./czechitas.png')
//         browser.url('https://czechitas-humpolec.herokuapp.com/')
//         browser.saveScreenshot('./aplikace.png')
//         browser.url('https://seznam.cz/')
//         browser.saveScreenshot('./seznam.png')
//     });
// });




// describe('Stranka s tlacitky', () => {
//     it('se otevře v prohlížeci a počká 5sekund než se prohlížeč zavře', () => {
//         browser.url('https://automation.cervik.repl.co/selectorsButtons.html');
//         browser.pause(3000)
//         browser.$('#button1').click()
//         browser.pause(1000)
//         browser.$('[name="clickingOnMe"]').click()
//         browser.pause(1000)
//         browser.$('.click-click-click').click()
//         browser.$('[data-qa="customAttribute-button"]').click()
//         browser.pause(5000)
//         browser.saveScreenshot('./hotovo.png')
//     });
// });

// describe('CVICENI 1A', () => {
//     it('se otevře v prohlížeci a počká 5sekund než se prohlížeč zavře', () => {
//         // Jdi na adresu https://www.czechitas.cz/cs
//         browser.url('https://automation.cervik.repl.co/selectorsButtons.html');
//         // Pockej 5sekund nez provedes dalsi prikaz
//         browser.pause(1000)
//         browser.$('#button1').click()
//         browser.pause(1000)
//         browser.$('.click-click-click').click()
//         browser.pause(1000)
//         browser.$('[data-qa="customAttribute-button"]').click()
//         browser.pause(5000)
//         browser.saveScreenshot('./buttons.png')
//     });
// });

// describe('Cviceni 2', () => {
//     it('se otevře v prohlížeci a počká 5sekund než se prohlížeč zavře', () => {
//         browser.url('https://automation.cervik.repl.co/selectorsButtons.html');
//         browser.pause(3000);
//         let poleTlacitek = browser.$$("div#selector-buttons button");
//         let pocetTlacitek = poleTlacitek.length;
//         console.log(`Pocet tlacitek je: ${pocetTlacitek}`)
//         for (let i = 0; i < pocetTlacitek; i++) {
//             poleTlacitek[i].click();
//         } browser.saveScreenshot('./poleTlacitek.png');
//     });
// });

// describe('Cviceni 3', () => {
//     it('se otevře v prohlížeci a počká 5sekund než se prohlížeč zavře', () => {
//         browser.url('https://automation.cervik.repl.co/login.html');
//         browser.pause(3000);
//         browser.$("#login-username").setValue("czzzzechitas")
//         browser.pause(3000)
//         browser.$("#login-username").clearValue()
//         browser.pause(3000)
//         browser.$("#login-username").setValue("czechitas")
//         browser.$("#login-password").setValue("D4Ostr4v42020")
//         browser.pause(3000)
//         browser.$('#login-submit').click()
//         browser.pause(3000)
//         let vypis = browser.$('div.container.body h1').getText()
//         console.log(vypis)
//         //browser.saveScreenshot('./poleTlacitek.png');
//     });
// });

/* ukol 2
Navštíví stránku https://automation.cervik.repl.co/selectors.html
Vypiš text ze žlutého obdelníku s nadpisem "Hint" - využij funkci .getText()
Spočítej, kolik je odstavců (<p> </p>) v <section id="pohadka"></section>  a vypiš
Klikni 10x na tlačítko Dám like!
Udělá screenshot a uloží ho jako ukol2.png
*/
describe('Domaci ukol 2', () => {
    it('a jeho exekuce', () => {
        browser.url('https://automation.cervik.repl.co/selectors.html');
        browser.pause(5000);
        let poleHintu = browser.$$('div.card.hint p');
        for (let i = 0; i < poleHintu.length; i++) {
            console.log(poleHintu[i].getText());
        }
        let pocetOdstavcu = browser.$$('#pohadka p');
        console.log(`Pocet odstavcu v <section id="pohadka"></section> je: ${pocetOdstavcu.length}`)
        browser.$('.mx-auto').scrollIntoView();
        let tlacitkoLibi = browser.$('#like-button');
        for (let i = 0; i < 10; i++) {
            browser.pause(1000);
            tlacitkoLibi.click();
        }
        browser.pause(2000);
        browser.saveScreenshot('./ukol2.png');
    });
});

// describe('Cviceni 3 - bonus', () => {
//     it('a jeho exekuce', () => {
//         browser.url('https://automation.cervik.repl.co/modal.html');
//         browser.$('.btn.btn-primary').click();
//         browser.pause(5000);
//         let text = browser.$('div.modal-body').getText();

//         if (text.search('Škarpa') != -1) {
//             console.log('Heureka, skarpa nalezena!')
//         }
//     });
// });