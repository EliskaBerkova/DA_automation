let loginPage = require('../pages/login.page')

describe('Login page', () => {
    before(() => {
        browser.url('https://czechitas-humpolec.herokuapp.com/prihlaseni')
    })

    // check title, because it is the core of page :D 
    it('should have correct title', () => {
        expect(browser).toHaveTitle("Přihlášení - Czechitas")
    })

    describe('Login as a user with parent role', () => {
        beforeEach(() => {
            browser.url('https://czechitas-humpolec.herokuapp.com/prihlaseni')
        })

        it('', () => {
            loginPage.login("da-app.parent-radka@czechitas.cz", "Czechitas123")
            expect()
        })

    })
})