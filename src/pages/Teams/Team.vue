<template>
  <div>
    <h2 class="text-center">{{ title }}</h2>
    <div class="row">
      <div class="col-3"></div>
      <div class="col-6">
        <form class="text-center" style="margin-bottom: 50px">
          <div class="form-group">
            <input type="text" class="form-control" placeholder="Title" v-model="team.title">
          </div>
          <div class="form-group">
            <input type="text" class="form-control" placeholder="City" v-model="team.city">
          </div>
          <button class="btn btn-primary" @click.prevent="addTeam" v-if="teamIndex === false">Add</button>
          <button class="btn btn-primary" @click.prevent="saveTeam" v-else>Save</button>
        </form>
      </div>
      <div class="col-3"></div>
    </div>
    <div class="text-center"><button class="btn btn-sm btn-warning" @click="goBack">Back</button></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'Add new team',
      team: {
        title: '',
        city: ''
      },
      teamIndex: false
    }
  },
  methods: {
    addTeam() {
      this.$store.dispatch('addTeam', this.team);
      this.$store.dispatch('createMatches');
      this.goBack();
    },
    saveTeam() {
      this.$store.state.teams[this.teamIndex].title = this.team.title;
      this.$store.state.teams[this.teamIndex].city = this.team.city;
      this.$store.dispatch('createMatches');
      this.goBack();
    },
    goBack() {
      this.$router.push('/teams')
    },
  },
  computed: {

  },
  mounted() {
    let teamIndex = this.$router.currentRoute.params.id;
    if (teamIndex !== undefined && this.$store.state.teams[teamIndex] !== undefined ) {
      this.team = this.$store.state.teams[teamIndex];
      this.title = 'Edit team ' + this.team.title;
      this.teamIndex = teamIndex;
    }
  },
  beforeRouteEnter(to, from, next) {
    let teamIndex = to.params.id;

    next(vm => {
      if (teamIndex === undefined) {
        next();
      } else if (vm.$store.state.teams[teamIndex] !== undefined) {
        next();
      } else {
        vm.goBack();
      }
    })
  }
}
</script>
