import { createRouter, createWebHistory } from 'vue-router';
import { ref } from 'vue';
import FirebaseRegisterView from '@/views/FirebaseRegisterView.vue';
import FirebaseLoginView from '@/views/FirebaseLoginView.vue';
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
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});


export { router, isAuthenticated };
export default router;