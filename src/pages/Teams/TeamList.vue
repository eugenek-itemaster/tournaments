<template>
  <div>
    <div class="row">
      <div class="col-sm-6">
        <h2>Teams</h2>
      </div>
      <div class="col-6 text-right">
        <router-link :to="{name: 'add-team'}" class="btn btn-sm btn-primary"><a>Add new team</a></router-link>
        <button class="btn btn-sm btn-warning" @click="addTestTeams">Add test teams</button>
      </div>
    </div>

    <table class="table table-striped table-bordered">
      <thead>
        <tr>
          <th scope="col" class="text-center">ID</th>
          <th scope="col" class="text-center">Title</th>
          <th scope="col" class="text-center">City</th>
          <th scope="col" class="text-center">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-if="teams.length > 0" v-for="(team, index) in teams">
          <th scope="row" class="text-center">{{ index }}</th>
          <td class="text-center">{{ team.title }}</td>
          <td class="text-center">{{ team. city }}</td>
          <td class="text-center">
            <router-link :to="{name: 'team', params: {id: index}}" class="btn btn-sm btn-primary">
              <a>Edit</a>
            </router-link>
            <button class="btn btn-sm btn-danger" @click="deleteTeam(index)">Delete</button>
          </td>
        </tr>
        <tr v-if="teams.length === 0">
          <td colspan="4" class="text-center">No teams added.</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  methods: {
    deleteTeam(index) {
      this.$store.state.teams.splice(index, 1);
      this.$store.dispatch('createMatches');
    },
    addTestTeams() {
      let self = this;

      let teams = [
        { title: 'Dinamo', city: 'Kyiv' },
        { title: 'Shakhtar', city: 'Donetsk' },
        { title: 'Dnipro-1', city: 'Dnipro' },
        { title: 'Vorskla', city: 'Poltava' },
      ];

      teams.forEach(function(team) {
        self.$store.dispatch('addTeam', team);
      });

      this.$store.dispatch('createMatches');
    }
  },
  computed: {
    teams() {
      return this.$store.state.teams;
    }
  }
}
</script>
