import m from "mithril"

const Layout = (vnode) => {
  return {
    view: (vnode) => {
      return m("main", vnode.children)
    }
  };
};

export default Layout