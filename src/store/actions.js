const actions = {
  setUser({ commit }, currentUser) {
    commit("setUser", currentUser);
  },

  setTeam({ commit }, currentTeam) {
    commit("setTeam", currentTeam);
  },

  setToken({ commit }, token) {
    commit("setToken", token);
  },

  setSnackbar({ commit }, snackbarInfo) {
    commit("setSnackbar", snackbarInfo);
  }
};

export default actions;
