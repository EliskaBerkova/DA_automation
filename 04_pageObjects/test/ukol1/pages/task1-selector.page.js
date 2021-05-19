let addingPage = {
    // get zajistuje, ze nemusime psat pak zavorky, coz nam rika, 
    // ze to je jen element, ne funkce, ktera neco dela.
    // PRIKLAD - funkce, ktera vraci element
    get giveLikeButton() { return $('#like-button') },
    get likeCounter() { return $('#lvlAwesome') },
    get headerOfStory() { return $('#pohadka h2') },
    get paragraphsOfStory() { return $$('#pohadka p') },
    get foxsInStory() { return $('p*=lištičky') },
    get imageOfStory() { return $('#pohadka img') },
}

module.exports = addingPage