import v from "voca";

const Store = {
  // login: (user) => {
  //   Store.activeUser = v.lowerCase(user) || "guest";
  //   // console.log("User logged in.");
  // },
	login: () => {
		return new Promise((resolve,reject) => {
			if (!Store.inputUser || !Store.inputPassword) {
				reject('Benutzername und Passwort notwendig.')
			} else {
				Store.activeUser = Store.inputUser
				
				Store.inputUser = ''
				Store.inputPassword = ''
				
				resolve(`${v.capitalize(Store.activeUser)} erfolgreich angemeldet.`)
			}
		})
	},

  logout: () => {
    Store.activeUser = "";
  },
	
	authorized: (route) => {
		if (!Store.activeUser) {
			return false
		}
		
		if (Store.activeUser === 'admin' || Store.roles[Store.activeUser].includes(route)) {
			 return true
	 	}
			 
		return false
	},
			 
	roles: {
		"user": [
			"platzinventur"	 
		]
 	},
	
  activeUser: "",
	inputUser: "",
	inputPassword: ""
};

export default Store;
