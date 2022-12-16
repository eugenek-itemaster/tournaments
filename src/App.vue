<template>
  <div>
    <nav class="navbar navbar-expand-md navbar-dark bg-primary">
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav mr-auto">
          <router-link to="/" tag="li" class="nav-item" active-class="active" exact>
            <a class="nav-link">Home</a>
          </router-link>
          <router-link to="/teams" tag="li" class="nav-item" active-class="active" exact>
            <a class="nav-link">Teams</a>
          </router-link>
          <router-link to="/matches" tag="li" class="nav-item" active-class="active" exact>
            <a class="nav-link">Matches</a>
          </router-link>
          <router-link to="/standings" tag="li" class="nav-item" active-class="active" exact>
            <a class="nav-link">Standings</a>
          </router-link>
        </ul>
      </div>
    </nav>

    <main role="main" class="container" style="padding: 20px 0px">
      <router-view></router-view>
    </main>
  </div>

</template>

<script>
export default {
  data () {
    return {
      club: 'Dynamo'
    }
  }
}
</script>
