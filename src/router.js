import { createRouter, createWebHistory } from 'vue-router';


import Register from './pages/Register.vue';
import Forgot from './pages/Forgot.vue';
import Home from './pages/home.vue';
import Login from './pages/login.vue';


const routes = [
  {
    path: '/',
    name: 'Home',
    component:Home ,
  },
  {
    path: '/login',
    name: 'Login',
    component:Login ,
  },
  {
    path:'/register',
    name: 'Register',
    component:Register,
  },
  {
    path:'/forgot-pass',
    name: 'Forgot',
    component:Forgot ,
  },
  


];

const router = createRouter({
  history: createWebHistory(),
  routes
});


export default router;
