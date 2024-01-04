const VueRouter = require('vue-router');
import LoginViewVue from '@/components/LoginView.vue'




const routes = [
  { path: '/', component: LoginViewVue },
];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes, 
});

export default router;