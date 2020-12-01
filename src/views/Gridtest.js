import m from "mithril";

const Gridtest = () => {
  return {
    view: (vnode) => {
      return m('.grid-container', [
				m('.gr-header', 
					m("div", {
						style: {
							display: "flex",
							alignItems: "center",
							height: "100%",
							padding: "0 1em"
						}
					}, [
						m("button", {
							class: "f3 bw0 br2 white bg-blue ph3 pv2 o-80 glow"
						}, "HOME")
					])
			  ),
				m('.gr-sidebar', "Menu"),
				m('.gr-footer', "Footer"),
				m('.gr-main', "Main")
			])
    }
  };
};

export default Gridtest;
