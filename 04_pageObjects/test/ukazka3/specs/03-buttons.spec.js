const buttonPage = require('../pages/03-buttons.page')

describe('Button page', () => {
  before(() => {
    buttonPage.open()
  })

  it('can click on button by id', () => {
    buttonPage.buttons.byId.click()
    expect(buttonPage.buttons.byId).toHaveElementClass("btn-success")
  })

  it('can click on button by name', () => {
    buttonPage.buttons.byName.click()
    expect(buttonPage.buttons.byName).toHaveElementClass("btn-success")
  })
  it('can click on button by class', () => {
    buttonPage.buttons.byClassName.click()
    expect(buttonPage.buttons.byClassName).toHaveElementClass("btn-success")
  })
  it('can click on button by text', () => {
    buttonPage.buttons.byText.click()
    expect(buttonPage.buttons.byText).toHaveElementClass("btn-success")
  })
  it('can click on button by partial text', () => {
    buttonPage.buttons.byPartialText.click()
    expect(buttonPage.buttons.byPartialText).toHaveElementClass("btn-success")
  })

  it('can click on button by custom attribute', ()=>{
    buttonPage.buttons.byCustomAttr.click()
    expect(buttonPage.buttons.byCustomAttr).toHaveElementClass("btn-success")
  })

})