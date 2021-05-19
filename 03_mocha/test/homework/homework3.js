/* ZADANI:
  Doplň všechny testcasy
  přidej kroky 
  přidej assertion (expect)
*/

/*
HINT: Secret password je schovane v HTML (nedaleko inputu pro secret heslo)
  Je potreba ho najit a precist. Nevadi, ze neni zobrazene - data tam jsou.
  Cislo se generuje kazdym nactenim stranky, nestaci si jej jednou precist a 
    a pak ho pouzivat celou dobu. 
  Hlasky maji dva stavy - 1) heslo je spravne, 2) heslo je spatne.
  Good luck! 
*/

describe('Secret number', () => {
    beforeEach(() => {
        // go to https://automation.cervik.repl.co/inputs.html
        browser.url('https://automation.cervik.repl.co/inputs.html')
    })
    it('confirmation appears after validating correct secret number', () => {
        let numberInput = browser.$('#secretNumberInput'); // find input field for a secret number
        let secretNumber = browser.$('#secretPassword').getValue(); // get value of the secret number
        //fill in the secret number to the input field
        numberInput.setValue(secretNumber);
        let checkButton = browser.$('#checkSecretNumber');
        checkButton.click(); //click on the 'Check number' button
        let controlText = browser.$('#passwordHelpBlock');
        //assertion, that the inserted number is correct
        expect(controlText).toHaveText('Super secret je super správně.');
    })

    it('error appears after validating wrong secret number', () => {
        let numberInput = browser.$('#secretNumberInput'); // find the input field for the secret number
        let wrongSecretNumber = 123; // setting an incorrect number value
        numberInput.setValue(wrongSecretNumber);
        let checkButton = browser.$('#checkSecretNumber');
        checkButton.click(); //click on the 'Check number' button
        let controlText = browser.$('#passwordHelpBlock');
        // assertion that the inserted number is incorrect
        expect(controlText).toHaveText('Super secret je super špatně.');
    })

    it('error appears after validating empty secret number', () => {
        let checkButton = browser.$('#checkSecretNumber');
        checkButton.click(); //click on the 'Check number' button 
        let controlText = browser.$('#passwordHelpBlock');
        // assertion that the result (secret number) is incorrect
        expect(controlText).toHaveText('Super secret je super špatně.');
    })
})