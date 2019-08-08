import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home.vue';
import Beers from '@/views/Beers.vue';

Vue.use(Router);
const router = new Router({
  routes: [
    {
      path: '',
      name: 'home',
      component: Home
    },
    {
      path: '/beers',
      name: 'beerlist',
      component: Beers
    }
  ]
});

export default router;
