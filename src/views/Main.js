import m from "mithril";
import Store from "../models/Store";

const Main = () => {
  let userInput = "";

  return {
    view: function (vnode) {
      return m("div", [
        m("h3", "Main Page"),
        m("p", vnode.attrs.greeter),
        m("input[type=text]", {
          oninput: (e) => {
            userInput = e.target.value;
          },
          hidden: Store.activeUser
        }),
        !Store.activeUser
          ? m(
              "button",
              {
                onclick: () => {
                  Store.login(userInput);
                  userInput = "";
                }
              },
              "Login"
            )
          : null,
        Store.activeUser
          ? m(
              "button.error",
              {
                onclick: () => {
                  Store.logout();
                }
              },
              "Logout"
            )
          : null
      ]);
    }
  };
};

export default Main;
