// ukazka jak muze vypadat testcase jedne "feature" / stranky

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

        $('p*=LOGGED!').waitForDisplayed()

        // OVERENI - ASSERTION
        expect($('h1=LOGGED!')).toBeDisplayedInViewport()
    });
});
