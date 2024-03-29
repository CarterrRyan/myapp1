// import vue and vuerouter
import { createApp } from 'vue'
import{createRouter, createWebHistory} from 'vue-router'

// import your components
import App from './App.vue'
import calculatorComponent from './components/calculatorComponent.vue'
import signinComponent from './components/signinComponent.vue'
import mainMenuComponent from './components/mainMenuComponent.vue'
import registerComponent from './components/registerComponent.vue'

//define routes
const routes = [
    {path: '/signin', component: signinComponent},
    {path: '/calculator', component: calculatorComponent},
    {path: '/mainMenu', component: mainMenuComponent},
    {path: '/register', component: registerComponent}
]

//create router instance
const router = createRouter({
    history: createWebHistory(),
    routes
})

const app = createApp(App)
app.use(router)
app.mount('#app')

