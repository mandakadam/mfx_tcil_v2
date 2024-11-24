import { createApp } from 'vue'
import App from './App.vue'
import 'jquery/src/jquery.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import './assets/css/style.scss'
import router from './router'

createApp(App).use(router).mount('#app')
