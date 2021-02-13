const actions = {
  setUser({ commit }, currentUser) {
    commit("setUser", currentUser);
  },

  setToken({ commit }, token) {
    commit("setToken", token);
  }
};

export default actions;
