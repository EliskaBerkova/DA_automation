let loginPage = {
  get inputUsername() { return $('#login-username') },
  get inputPassword() { return $('#login-password') },
  get buttonLogIn() { return $('#login-submit') },

  login(username, password) {
    this.inputUsername.setValue(username)
    this.inputPassword.setValue(password)
    this.buttonLogIn.click()
  }
}

module.exports = loginPage