// import "normalize.css"
import "./css/main.css"
import 'tachyons'

import m from "mithril"
// import Layout from "./views/Layout_OLD"
import Layout from "./views/Layout"
import Main from "./views/Main"
import Login from "./views/Login"
import About from "./views/About"
import Platzinventur from "./views/Platzinventur"
import Gridtest from "./views/Gridtest"
import GridPartial from "./views/Gridpartial"

// console.log("App started");

m.route(document.body, "/login", {
  "/login": {
    render: (vnode) => {
      // console.log(vnode.attrs)
      return m(Layout, m(Login, { title: 'Login' }))
    }
  },
	"/platzinventur": {
		render: (vnode) => {
			return m(Layout, m(Platzinventur, { title: 'Platzinventur' }))
		}
	},
  "/gt": {
    render: () => {
      return m(Layout, m(Gridtest))
    }
  },
  "/gt2" : {
    render: () => {
      return m(LayoutGrid, m(Gridtest))
    }
  },
  "/main": {
    render: () => {
      // return m(Main);
      return m(Layout, m(Main, { greeter: "Hello from Mithril!" }));
    }
  },
  "/about": {
    render: () => {
      return m(Layout, m(About));
    }
  },
});
