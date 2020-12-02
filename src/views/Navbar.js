import m from 'mithril'
import v from "voca";
import Store from "../models/Store";

const Navbar = () => {
  return {
    view: (vnode) => {
      return m('.gr-header', 
        m("[class=flex items-center h-100 ph3]",
        [
          m("logo[class=f3 fw9 b mr4 red]", `ABB KL - ${vnode.attrs.title}`),
					m(m.route.Link,
						{
							class: "f5 fw6 ml1 ph3 pv2 bw0 br2 white bg-blue no-underline grow",
							href: "/platzinventur",
							hidden: !Store.authorized('platzinventur')
						}, "Platzinventur"
				  ),
          m("[class=ml-auto]",
            [
              m(m.route.Link, {
                class: "f5 fw6 ml1 ph3 pv2 bw0 br2 white bg-blue no-underline grow",
                href: "/login"
              }, "LOGIN"),
              m("button", {
                class: `f5 fw6 ml1 ph3 pv2 bw0 br2 white bg-red no-underline grow`,
                // href: "/login"
                hidden: !Store.activeUser,
                onclick: () => {
                  Store.logout()
                }
              }, `Logout, ${v.capitalize(Store.activeUser)}`)
            ]
          )
        ]
      ))
    }
  }
}

export default Navbar