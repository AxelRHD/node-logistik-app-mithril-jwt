import m from "mithril";
import Navbar from "./Navbar_OLD";

const Layout = () => {
  return {
    view: (vnode) => {
      return m("main",
				m('.grid-container', [
					m(Navbar),
					m("#app", [
						m("h1", "Mithril Primer"),
						m(".gr-main", vnode.children)
					])
      	])
			);
    }
  };
};

export default Layout;
