/*
ZADANI:
 Kliknout na tlačítko právě když je na něm vyobrazena lištička 🦊 Easy peasy!
  1. Jdi na stranku https://automation.cervik.repl.co/findfox.html
  2. DULEZITE: Pockej, az uvidis 🦊 v buttonu. Podivej se na https://webdriver.io/docs/api/element/waitForDisplayed.html
      ⚠️ Doporucuju zvysit timeout a nastavit interval na 30 (jak casto se bude WDIO ptat, jestli je dany element pritomny)
      DULEZITA CAST JE TEN OBJECT, KTERY TAM LZE DAT DO DANE FUNKCE. TIMEOUT A INTERVAL! { neconeco: 30000, neconeco: 30}
  3. Klikni na tlacitko s 🦊
  4. Udelej screenshot a pojmenuj ho listicka.png
  5. Nastav si dostatecny browser.pause(). Opravdu :) Treba 20 sekund.
  6. Relaxuj :)) 
  HINT: Emoji muzes pouzit v selektoru ;)
  Odevzdej screenshot a kod do moje.czechitas. :) 
*/
describe('Find 🦊', () => {
    it('if you can!', () => {
        //go to the webpage https://automation.cervik.repl.co/findfox.html
        browser.url('https://automation.cervik.repl.co/findfox.html')
        //wait for the fox image
        let foxImage = browser.$('.btn-primary=🦊');
        foxImage.waitForDisplayed({ timeout: 30000, interval: 30 });
        foxImage.click()
        //make a screenshot of the fox
        browser.saveScreenshot('./listicka.png')
        //assertion 
        //let resultText = browser.$('#somethingForYou p')
        //expect(resultText).toHaveTextContaining('Gratuluji! Pátý úkol splněn!')
        let button = browser.$('button')
        expect(button).toHaveElementClass('btn-success')
        browser.pause(20000)
    });
})
