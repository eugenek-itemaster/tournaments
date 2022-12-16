import VueRouter from "vue-router";
import Home from "./pages/Home.vue";
import Matches from "./pages/Matches.vue";
import Standings from "./pages/Standings.vue";
import TeamList from "./pages/Teams/TeamList.vue";
import Team from "./pages/Teams/Team.vue";

const NotFound = resolve => {
  require.ensure(['./pages/NotFound.vue'], () => {
    resolve(
      require('./pages/NotFound.vue')
    );
  });
}

export default new VueRouter({
  routes : [
    {
      path: '',
      component: Home,
      name: 'home'
    },
    {
      path: '/teams',
      component: TeamList,
      name: 'teams'
    },
    {
      path: '/matches',
      component: Matches,
      name: 'matches'
    },
    {
      path: '/standings',
      component: Standings,
      name: 'standings'
    },
    {
      path: '/team/add',
      component: Team,
      name: 'add-team',
    },
    {
      path: '/team/:id',
      component: Team,
      name: 'team',
      beforeEnter(to, from, next) {
        next();
      }
    },
    {
      path: '*',
      component: NotFound
    }
  ],
  mode: 'history'
});
