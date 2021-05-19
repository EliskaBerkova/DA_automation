/**
 * Horni lista, pro navigovani v ramci stranky. 
 *  */  
let navigation = {
  get home() { return $('.navbar-brand')},
  get login() { return $('a*=Login') },
  get hover() { return $('a*=Hover') },
  get loading() { return $('a*=Loading') },
  get items() { return $('a*=Items') },
  get inputs() { return $('a*=Inputs') },
  get table() { return $('a*=Table') },
  get modal() { return $('a*=Modal') },
  get selectors() { return $('a*=Selectors') },
  get buttons() { return $('a*=Buttons') },
}

module.exports = navigation