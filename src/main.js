// import './assets/main.css'
// import '@/assets/style.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'
// import DataTable from 'primevue/datatable'
// import Column from 'primevue/Column'

const app = createApp(App)
app.use(PrimeVue, { theme: { preset: Aura } })
app.use(router)

// app.component('DataTable', DataTable)
// app.component('Column', Column)

app.mount('#app')

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1naibA2YjzAnCBfQRB_FbK95DQHYbyg8",
  authDomain: "week7-pinliang.firebaseapp.com",
  projectId: "week7-pinliang",
  storageBucket: "week7-pinliang.appspot.com",
  messagingSenderId: "795784017115",
  appId: "1:795784017115:web:7d2b1a1abaf787f90288fe"
};

// Initialize Firebase
initializeApp(firebaseConfig);