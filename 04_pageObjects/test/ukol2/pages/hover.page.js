let hoverPage = {
    // get zajistuje, ze nemusime psat pak zavorky, coz nam rika, 
    // ze to je jen element, ne funkce, ktera neco dela.
    // PRIKLAD - funkce, ktera vraci element
    get buttonAddCat() { return $('#addItem') },
    get header() { return $('h1=Hover') },
    // missing: cardCat, cardDog, cardUnicorn
    get cardCat() { return $('.cat.card.card-hover') },
    get cardDog() { return $('.dog.card.card-hover') },
    get cardUnicorn() { return $('.unicorn.card.card-hover') },



    // this function hover on card, if you add this..
    // it is used as hoverPage.hoverOn(hoverPage.dogCard)
    hoverOn: function (card) {
        card.scrollIntoView()
        card.moveTo()
    },
}

module.exports = hoverPage