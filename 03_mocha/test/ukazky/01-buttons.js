// ukazka jak muze vypadat testcase jedne "feature" / stranky

// CO BUDEME TESTOVAT
describe('Button', () => {
    // TEST-CASE - jakym zpusobem to budeme testovat
    it('have class `btn-success` after clicking on it', () => {

        // KROKY PRO OVERENI 
        browser.url('https://automation.cervik.repl.co/selectorsButtons.html');
        $('#button1').click()


        // OVERENI - ASSERTION
        expect($('#button1')).toHaveElementClass('btn-success')
    });
});
