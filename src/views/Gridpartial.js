import m from 'mithril'

const GridPartial = () => {
  return {
    view: (vnode) => {
      return m("div", [
        m(".grid-sidebar", "Menu"),
        m(".grid-main", "Main")
      ])
    }
  }
}

export default GridPartial