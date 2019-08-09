
module.exports = {
  'Login Page Initial Render':''+function(browser) {
    var login = browser.page.commandsRegister();

    login.navigate()
      .validateForm()

    browser.end();
  },



  'Try to login with no username or password':''+function(browser) {
    var login = browser.page.commandsRegister();
    
    login.navigate()
      .submit()
      .validateError('User name or password is Invalid')

    browser.end();
  },



  'Try to login with a username and no password': function(browser) {
    var login = browser.page.commandsRegister();

    login.navigate()
      .fillInReg('abc', ' ' , 'Test@gmail.com')
      .submit()
      .validateError('User name or password is Invalid')
      //"Password is empty"

    browser.end();
  }
};
