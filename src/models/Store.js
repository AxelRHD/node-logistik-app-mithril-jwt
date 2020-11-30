import v from "voca";

const Store = {
  login: (user) => {
    Store.activeUser = v.lowerCase(user) || "guest";
    // console.log("User logged in.");
  },

  logout: () => {
    Store.activeUser = "";
  },
  activeUser: ""
};

export default Store;
