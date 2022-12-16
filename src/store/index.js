import Vue from "vue";
import VuexEsm from "vuex";

Vue.use(VuexEsm)

export default new VuexEsm.Store({
  state: {
    teams: [],
    matches: []
  },
  actions: {
    addTeam({commit, state, actions}, team) {
      state.teams.push(team);
    },
    createMatches({state}) {
      state.matches = [];
      if (state.teams.length > 1) {
        state.teams.forEach(function(team1, index1) {
          state.teams.forEach(function(team2, index2) {
            if (index1 !== index2) {
              state.matches.push({
                team1: {
                  index: index1,
                  team: team1
                },
                team2: {
                  index: index2,
                  team: team2
                },
                score: []
              });
            }
          });
        });
      }
    }
  },
  /*mutations: {
    addTeam(state, team) {
      state.teams.push(team);
    }
  }*/
});
