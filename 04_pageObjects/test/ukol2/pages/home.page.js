let homePage = {
    // get zajistuje, ze nemusime psat pak zavorky, coz nam rika, 
    // ze to je jen element, ne funkce, ktera neco dela.
    // PRIKLAD - funkce, ktera vraci element
    get buttonAddCat() { return $('#addItem') },
    get header() { return $('h1 *=kouzlit a automatizovat') }
}

module.exports = homePage