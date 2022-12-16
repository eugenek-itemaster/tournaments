<template>
  <div>
    <h2>Standings</h2>
    <div class="row">
      <div class="col-3"></div>
      <div class="col-6">
        <table class="table table-striped table-bordered">
          <thead>
          <tr>
            <th scope="col" class="text-center">Team</th>
            <th scope="col" class="text-center">Games</th>
            <th scope="col" class="text-center">Goals in</th>
            <th scope="col" class="text-center">Goals out</th>
            <th scope="col" class="text-center">Total</th>
          </tr>
          </thead>
          <tbody>
            <tr v-if="teams.length > 0" v-for="team in teams">
              <td class="text-center">
                {{ team.info.title }} <span v-if="team.info.city">({{ team.info.city }})</span>
              </td>
              <td class="text-center">{{ team.games }}</td>
              <td class="text-center">{{ team.goal_in }}</td>
              <td class="text-center">{{ team.goal_out }}</td>
              <td class="text-center">{{ team.total }}</td>
            </tr>
            <tr v-if="teams.length <= 0">
              <td colspan="5" class="text-center">No teams added.</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="col-3"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  computed: {
    teams() {
      let teams = [];
      let self = this;

      this.$store.state.teams.forEach(function(team, teamIndex) {
        let item = {
          info: team,
          games: 0,
          goal_in: 0,
          goal_out: 0,
          total: 0
        };

        let matches = self.$store.state.matches;
        matches.forEach(function(match, index) {
          if ((match.team1.index === teamIndex || match.team2.index === teamIndex) && match.score.length === 2) {
            item.games++;
          }

          if (match.team1.index === teamIndex && match.score.length === 2) {
            item.goal_in += match.score[0];
            item.goal_out += match.score[1];

            if (match.score[0] > match.score[1]) {
              item.total += 3
            } else if (match.score[0] === match.score[1]) {
              item.total += 1;
            }
          }

          if (match.team2.index === teamIndex && match.score.length === 2) {
            item.goal_in += match.score[1];
            item.goal_out += match.score[0];

            if (match.score[1] > match.score[0]) {
              item.total += 3
            } else if (match.score[1] === match.score[0]) {
              item.total += 1;
            }
          }
        });

        teams.push(item);
      });

      teams.sort(function(a, b) {
        return b.total - a.total;
      });

      return teams;
    }
  }
}
</script>
