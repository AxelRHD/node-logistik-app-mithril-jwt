import m from "mithril";
import Navbar from "./Navbar";

const Layout = () => {
  return {
    view: (vnode) => {
      return m("main.layout", [
        m(Navbar),
        m("#app", [
          m("h1", "Mithril Primer"),
          m("section.main", vnode.children)
        ])
      ]);
    }
  };
};

export default Layout;
