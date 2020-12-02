import m from "mithril"

import Navbar from './Navbar'

const Gridtest = () => {
  return {
    view: (vnode) => {
      return m('div[class=grid-container grid-template-sidebar]',
        // {
        //   class: "grid-container grid-template-sidebar"
        // },
        [
				m(Navbar),
				m('.gr-sidebar', "Menu"),
				m('.gr-footer', "Footer"),
				m('.gr-main', "Main")
			])
    }
  }
}

export default Gridtest