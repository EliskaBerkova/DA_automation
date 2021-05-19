/* ZADANI:
  Ověř, že tlačíko Přidej kočku přidá kartu s kočkou.
  Ověř, že tlačíko Přidej kočku dokáže přidat vícero karet s kočkou.
  Ověř, že tlačíko Odeber kočku odebre jednu kartu s kočkou.
  Ověř, že tlačíko Apokalypsa! smaže všechny karty s kočkou.
  Ověř, že počítadlo koček reaguje na přidání kočky, smazání kočky, smazání všech koček
  Ověř, že lze přidat 20 karet s kočkou.
  Zajisti, aby Tvé testy byly atomické = aby byly na sobě nezávislé, daly se spouštět jednotlivě.
  Ověř, že tlačítka na odebrání jsou aktivní jen, když je zobrazena aspoň jedna karta kočky
  Ověř, že tlačítka na odebrání jsou deaktivována po smazání poslední karty kočky.
*/
const loginPage = require('../pages/login.page')
const loggedPage = require('../pages/logged.page')

describe('Login page', () => {
  beforeEach(() => {
    browser.url('https://automation.cervik.repl.co/login.html')
  })

  it('jde se prihlasit pomoci PoP', () => {
    let username = 'czechitas'
    let pwd = 'D4Ostr4v42020'

    loginPage.inputUsername.setValue(username)
    loginPage.inputPassword.setValue(pwd)
    loginPage.buttonLogIn.click()

    expect(loggedPage.h1).toHaveText('LOGGED!')
  })

  it('jde se prihlasit pomoci PoP a funkce', () => {
    let username = 'czechitas'
    let pwd = 'D4Ostr4v42020'

    loginPage.login(username, pwd)

    expect(loggedPage.h1).toHaveText('LOGGED!')
  })
})