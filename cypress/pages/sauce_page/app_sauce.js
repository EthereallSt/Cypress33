const app_sauce = {

    loginUI(path = '', username = data.user_test_login, password = data.user_test_password, success = true) {
        cy.visit('' + path);
        cy.get(this.app_field_username_input).type(username);
        cy.get(this.app_field_password_input).type(password)
        cy.intercept('**/auth/validate').as('auth')
        cy.get(this.app_login_button).click()
    },

    //Login page
    app_field_username_input: 'input[data-test="username"]',
    app_field_password_input: 'input[data-test="password"]',
    app_login_button: 'input[data-test="login-button"]',

    //Main page
    app_brand_logo: '.app_logo'
}
export default {...app_sauce}