let buttonPage = {
  get url() { return 'https://automation.cervik.repl.co/selectorsButtons.html'},
  buttons: {
    get byId() { return $('#button1') },
    get byName() { return $('[name="clickingOnMe"]') },
    get byClassName() { return $('.click-click-click') },
    get byText() { return $('button=This is THE button') },
    get byPartialText() { return $('button*=Partial link') },
    get byCustomAttr() { return $('[data-qa="customAttribute-button"]') },
  },

  open: function() {
    browser.url(this.url)
  }
}

module.exports = buttonPage