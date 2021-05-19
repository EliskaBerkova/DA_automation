// ukazka jak muze vypadat VICE testcasu jedne "feature" / stranky

// CO BUDEME TESTOVAT
describe('Feature LOGIN', () => {
    // TEST-CASE - jakym zpusobem to budeme testovat
    it('is possible to log into app with correct credentials', () => {
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

    it.only('is NOT possible to log into app with wrong credentials', () => {
        let username = 'czechitas'
        let password = 'ListickySemNepatriATakProtoTeToSemNepusti.Smutne.'

        // KROKY PRO OVERENI 
        browser.url('https://automation.cervik.repl.co/login.html');
        $('#login-username').setValue(username) // VYPLNIM JMENO
        $('#login-password').setValue(password) // VYPLNIM HESLO
        $('#login-submit').click()              // KLIKNU NA TLACITKO "LOG IN!"

        // OVERENI - ASSERTION
        expect($('.alert=Špatné heslo!')).toBeDisplayedInViewport()
    });
});
