import { createRouter, createWebHistory } from 'vue-router';


import Register from './components/Register.vue';
import Forgot from './components/Forgot.vue';
import Home from './components/Home.vue';
import Login from './components/Login.vue';
import About from './components/About.vue';
import NotFound from './components/NotFound.vue';

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
    path:'/todo',
    name: 'Todo',
    component:About ,
  },
  {
    path:'/not',
    name: 'NotFound',
    component:NotFound ,
  }


];

const router = createRouter({
  history: createWebHistory(),
  routes
});


export default router;
