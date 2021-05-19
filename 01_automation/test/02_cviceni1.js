
describe('Cviceni 1', () => {
    it('se otevře v prohlížeci a počká 5sekund než se prohlížeč zavře', () => {

        browser.url("/");
        browser.saveScreenshot('./czechitas.png');

        let username = 'czechitas'
        let password = 'D4Ostr4v42020'

        // KROKY PRO OVERENI 
        browser.url('https://automation.cervik.repl.co/login.html');
        $('#login-username').setValue(username) // VYPLNIM JMENO
        $('#login-password').setValue(password) // VYPLNIM HESLO
        $('#login-submit').click()              // KLIKNU NA TLACITKO "LOG IN!"

        // OVERENI - ASSERTION
        expect($('h1=LOGGED!')).toBeDisplayedInViewport()
    });
});
