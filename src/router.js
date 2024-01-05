const VueRouter = require('vue-router');
import LoginViewVue from '@/components/LoginView.vue';
import DashboardViewVue from '@/components/DashboardView.vue';
import HomeViewVue from '@/components/HomeView.vue';



const routes = [
  { path: '/', component: LoginViewVue },
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