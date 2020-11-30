import m from "mithril";
import v from "voca";
import Store from "../models/Store";

const Navbar = () => {
  return {
    view: (vnode) => {
      return m("nav", [
        m(
          m.route.Link,
          {
            class: "button error",
            href: "/main"
          },
          "MAIN"
        ),
        m(
          m.route.Link,
          {
            class: "button",
            href: "/about"
          },
          "About"
        ),

        Store.activeUser ? m("a", v.capitalize(Store.activeUser)) : null
      ]);
    }
  };
};

export default Navbar;
