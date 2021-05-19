// ukazka jak muze vypadat VICE testcasu jedne "feature" / stranky

// CO BUDEME TESTOVAT
describe('Button', () => {
    // TEST-CASE - jakym zpusobem to budeme testovat
    it('have class `btn-success` after clicking on it', () => {
        browser.url('https://automation.cervik.repl.co/selectorsButtons.html');
        $('#button1').click()
        expect($('#button1')).toHaveElementClass('btn-success')
    });

    it('has class `btn btn-primary` by default', () => {
        browser.url('https://automation.cervik.repl.co/selectorsButtons.html');
        expect($('#button1')).toHaveElementClass('btn-primary')
        expect($('#button1')).toHaveElementClass('btn')
    });
});
