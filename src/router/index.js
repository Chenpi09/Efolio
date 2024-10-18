import { createRouter, createWebHistory } from 'vue-router';
import { ref } from 'vue';
import FirebaseRegisterView from '@/views/FirebaseRegisterView.vue';
import FirebaseLoginView from '@/views/FirebaseLoginView.vue';
import AddBookView from '@/views/AddBookView.vue';
import GetBookCountView from '../views/GetBookCountView.vue';
import WeatherView from '../views/WeatherView.vue';
import CountBookAPI from '@/views/CountBookAPI.vue';

const isAuthenticated = ref(false);

const routes = [

  {
    path: '/fireLogin',
    name: '/fireLogin',
    component: FirebaseLoginView
  },
  {
    path: '/fireRegister',
    name: '/fireRegister',
    component: FirebaseRegisterView
  },
  {
    path: '/AddBook',
    name: '/AddBook',
    component: AddBookView
  },
  {
    path: '/GetBookCount',
    name: 'GetBookCount',
    component: GetBookCountView
  },
  {
    path: '/WeatherCheck',
    name: 'WeatherCheck',
    component: WeatherView
  },
  {
    path: '/CountBookAPI',
    name: 'CountBookAPI',
    component: CountBookAPI
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});


export { router, isAuthenticated };
export default router;