import { createRouter, createWebHistory } from 'vue-router';


import Register from './pages/Register.vue';
import Forgot from './pages/Forgot.vue';
import Email from './pages/Email.vue';
import Home from './pages/Home.vue';
import Login from './pages/Login.vue';
import Dashboard from './pages/Dashboard.vue';
import Profil from './pages/Profil.vue';

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
  {
    path:'/email',
    name: 'Email',
    component:Email ,
  },
  {
    path:'/todo',
    name: 'Todo',
    component:Dashboard ,
  },
  {
    path:'/profil',
    name: 'Profil',
    component:Profil ,
  }


];

const router = createRouter({
  history: createWebHistory(),
  routes
});


export default router;
