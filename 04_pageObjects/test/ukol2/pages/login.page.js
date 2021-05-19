let loginPage = {
    // get zajistuje, ze nemusime psat pak zavorky, coz nam rika, 
    // ze to je jen element, ne funkce, ktera neco dela.
    // PRIKLAD - funkce, ktera vraci element
    get buttonAddCat() { return $('#addItem') },
    get firstHeader() { return $('h1=Přihlášení') }

}

module.exports = loginPage