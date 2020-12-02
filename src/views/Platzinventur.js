import m from "mithril"

import Navbar from './Navbar'

const Platzinventur = () => {
  return {
    view: (vnode) => {
      return m('div[class=grid-container grid-template-sidebar]',
        // {
        //   class: "grid-container grid-template-sidebar"
        // },
        [
				m(Navbar, { title: vnode.attrs.title }),
				m('.gr-sidebar', "Menu"),
				m('.gr-main', "Platzinventur"),
				m('.gr-footer', "Footer"),
			])
    }
  }
}

export default Platzinventur