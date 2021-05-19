let pomocnik = require("../utils")


describe('Cviceni 2', () => {
    it('se otevře v prohlížeci a počká 5sekund než se prohlížeč zavře', () => {
        pomocnik.showSetting()

        browser.url("https://www.czechitas.cz");
        browser.saveScreenshot('./czechitas.png');
        pomocnik.showPageInfo();
        browser.url("https://moje.czechitas.cz/cs")
        browser.saveScreenshot('./aplikace.png');
        pomocnik.showPageInfo();
        browser.url("https://www.seznam.cz")
        browser.saveScreenshot('./seznam.png');
        pomocnik.showPageInfo();
    });
});
