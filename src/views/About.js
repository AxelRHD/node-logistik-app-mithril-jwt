import m from "mithril";

const About = () => {
  return {
    view: (vnode) => {
      return m("div", [m("h3", "About"), m("p", "This is the About-Page")]);
    }
  };
};

export default About;
