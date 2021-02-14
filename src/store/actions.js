const actions = {
  setUser({ commit }, currentUser) {
    commit("setUser", currentUser);
  },

  setTeam({ commit }, currentTeam) {
    commit("setTeam", currentTeam);
  },

  setToken({ commit }, token) {
    commit("setToken", token);
  }
};

export default actions;
