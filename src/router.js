const VueRouter = require('vue-router');
import LoginViewVue from '@/components/LoginView.vue';
import DashboardViewVue from '@/components/DashboardView.vue';
import HomeViewVue from '@/components/HomeView.vue';
import PlayViewVue from './components/PlayView.vue';



const routes = [
  { path: '/', component: PlayViewVue },
  { path: '/login', component: LoginViewVue },

  { 
    path: '/home', 
    component: HomeViewVue,
    children: [ 
      { path: '', component: DashboardViewVue}
    ]
  },

];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes, 
});

export default router;