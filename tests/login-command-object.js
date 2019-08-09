
module.exports = {
  'Login Page Initial Render':''+ function(browser) {
    var login = browser.page.commandsLogin();

    login.navigate()
      .validateForm()

    browser.end();
  },



  'Try to login with no username or password':''+function(browser) {
    var login = browser.page.commandsLogin();
    
    login.navigate()
      .submit()
      .validateError('User name or password is not correct')

    browser.end();
  },



  'Try to login with a username and no password':''+ function(browser) {
    var login = browser.page.commandsLogin();

    login.navigate()
      .fillInForm('abc', '')
      .submit()
      .validateError('User name or password is not correct.')
      //"Password is empty"

    browser.end();
  }
};
