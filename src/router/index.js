
import VueRouter from 'vue-router'
import Coordinates from '../views/Coordinates';
import Graphs from '../views/Graphs';

export const router = new VueRouter({
    routes: [
      { path: '/', component: Coordinates, name: 'coordinates' },
      { path: '/graphs', component: Graphs, name: 'graphs' }     
    ]
})
  