<template>
  <div>
    <div class="row">
      <div class="col-sm-6">
        <h2>Matches</h2>
      </div>
      <div class="col-6 text-right">
        <button class="btn btn-sm btn-primary" @click="generateResults">Generate results</button>
      </div>
    </div>

    <div class="row">
      <div class="col-3"></div>
      <div class="col-6">
        <table class="table table-striped table-bordered">
          <thead>
          <tr>
            <th scope="col" class="text-center">Teams</th>
            <th scope="col" class="text-center">Score</th>
          </tr>
          </thead>
          <tbody>
            <tr v-if="matches.length > 0" v-for="match in matches">
              <td class="text-center">
                {{ match.team1.team.title }}
                &nbsp;<span v-if="match.team1.team.city">({{ match.team1.team.city }})</span>
                <span v-if="match.score.length === 2 && match.score[0] > match.score[1]">*</span>
                &nbsp;-&nbsp;
                {{ match.team2.team.title }}
                &nbsp;<span v-if="match.team2.team.city">({{ match.team2.team.city }})</span>
                <span v-if="match.score.length === 2 && match.score[1] > match.score[0]">*</span>
              </td>
              <td class="text-center">
                <span v-if="match.score.length === 2">{{ match.score[0] }} - {{ match.score[1] }}</span>
                <span v-else>- : -</span>
              </td>
            </tr>
            <tr v-if="matches.length === 0">
              <td colspan="2" class="text-center">No matches added.</td>
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
  methods: {
    generateResults() {
      let self = this;

      this.$store.state.matches.forEach(function(match, index) {
        let score = [
          Math.floor(Math.random() * 4),
          Math.floor(Math.random() * 4)
        ];

        self.$store.state.matches[index].score = score;
      });
    }
  },
  computed: {
    matches() {
      return this.$store.state.matches;
    }
  }
}
</script>
