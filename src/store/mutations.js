const mutations = {
  setUser(state, user) {
    state.user = user;
    if (user == null) state.isLoggedIn = false;
    else state.isLoggedIn = true;
  },

  setToken(state, token) {
    state.token = token;
  },

  setTeam(state, team) {
    state.team = team;
  }
};

export default mutations;
