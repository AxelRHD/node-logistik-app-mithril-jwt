import m from "mithril"

import Navbar from './Navbar'

import Store from '../models/Store'

const Login = () => {
  return {
    view: (vnode) => {
      return m('[class=grid-container grid-template-main]', [
				m(Navbar, { title: vnode.attrs.title }),
				// m('.gr-sidebar', "Menu"),
				m('[class=gr-main]',
          m('[class=flex ph2 pt3]',
          m(m.route.Link, {
            class: "f5 fw6 ph3 pv2 bw0 br2 white bg-green no-underline grow",
            // href: "/login"
            // hidden: Store.activeUser,
            onclick: () => {
              Store.login()
            }
          }, "LOGIN Guest")
        )),
        m('.gr-footer', "Footer"),
			])
    }
  }
}

export default Login