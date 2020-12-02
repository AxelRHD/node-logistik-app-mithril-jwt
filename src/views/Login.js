import m from "mithril"

import Navbar from './Navbar'

import Store from '../models/Store'

const Login = () => {
  return {
		oncreate: () => {
			document.getElementById('inp-username').focus()
		},
    view: (vnode) => {
      return m('[class=grid-container grid-template-main]', [
				m(Navbar, { title: vnode.attrs.title }),
				// m('.gr-sidebar', "Menu"),
				m('[class=gr-main]',
          m('[class=fl pa2 w-75]',
					m('form#form-login', {
						onsubmit: (e) => {
							// alert('Form submited.')
							Store.login()
								.then((msg) => {
									// console.log(msg)
									document.getElementById('inp-username').value = ''
									document.getElementById('inp-password').value = ''
									
									alert(msg)
									document.getElementById('inp-username').focus()
								})
								.catch((err) => {
									alert(err)
								})
							
							e.preventDefault()
						}
					},
					[
						m('[class=flex items-center pa1]', [
							m('label[for=inp-username][class=f4 b pv1 w-20]', "Benutzer"),
							m('input#inp-username[type=text][class=f4 pa1 br2 b--blue]', {
								oninput: (e) => {
									Store.inputUser = e.target.value
								}
							})
						]),
						m('[class=flex items-center pa1]', [
							m('label[for=inp-password][class=f4 b pv1 w-20]', "Passwort"),
							m('input#inp-password[type=password][class=f4 pa1 br2  b--blue]', {
								value: Store.inputPassord,
								oninput: (e) => {
									Store.inputPassword = e.target.value
								}
							})
						]),
						m('[class=flex items-center pa1]', [
							m('button[type=submit]', {
								style: "display: none",
								class: "f5 fw6 ph3 pv2 bw0 br2 white bg-green no-underline inline grow"
							}, "Senden")
						])
					]),
					// m('[class=flex items-center pa1]', [
					// 	m(m.route.Link, {
					// 		class: "f5 fw6 ph3 pv2 bw0 br2 white bg-green no-underline inline grow",
					// 		// href: "/login"
					// 		// hidden: Store.activeUser,
					// 		onclick: () => {
					// 			Store.login('user')
					// 		}
					// 	}, "LOGIN Guest")
					// ])
        )),
        m('.gr-footer', "Footer"),
			])
    }
  }
}

export default Login