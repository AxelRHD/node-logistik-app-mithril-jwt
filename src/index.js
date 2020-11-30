import "./css/main.css";
// import 'tachyons'

import m from "mithril";
import Layout from "./views/Layout";
import Main from "./views/Main";
import About from "./views/About";

// console.log("App started");

m.route(document.body, "/", {
  "/": {
    render: () => {
      // return m(Main);
      return m(Layout, m(Main, { greeter: "Hello from Mithril!" }));
    }
  },
  "/about": {
    render: () => {
      return m(Layout, m(About));
    }
  }
});
