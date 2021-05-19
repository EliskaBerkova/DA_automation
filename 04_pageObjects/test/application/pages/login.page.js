let loginPage = {
    get inputUsername() { return $('#email') },
    get inputPassword() { return $('#password') },
    get buttonLogIn() { return $('.btn.btn-primary') },

    login(username, password) {
        this.inputUsername.setValue(username)
        this.inputPassword.setValue(password)
        this.buttonLogIn.click()
    }
}

module.exports = loginPage