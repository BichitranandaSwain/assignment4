var registerCommands = {
	validateForm: function() {
		return this.waitForElementVisible('body', 1000)
			.verify.visible('@username')
			.verify.visible('@password')
			.verify.visible('@Email')
			.verify.value('@submit', 'Register')
			.verify.elementNotPresent('@error')
	},
	fillInReg: function(username, password, Email) {
		return this.waitForElementVisible('body', 1000)
			.setValue('@username', username)
			.setValue('@password', password)
			.setValue('@Email', Email)
	},
	submit: function() {
		return this.verify.value('@submit', 'Register')
			.click('@submit')
	},
	validateError: function(errorMessage) {
		return this.verify.visible('@error')
			.verify.containsText('@error', 'User name or password is Invalid')
			.verify.valueContains('@username', '')
			.verify.valueContains('@password', '')
			.verify.valueContains('@Email', '')
	}
};


module.exports = {
	commands: [registerCommands],
	url: function() { 
		return this.api.launchUrl; 
	},
	elements: {
		username: {
			selector: 'input[name=user_name]'
		},
		password: {
			selector: 'input[name=password]'
		},
		submit: {
			selector: 'input[value=Register]'
		},
		Email: {
			selector: 'input[name=email]'
		},
		error: {
			selector: '#error'
		}
	}
};