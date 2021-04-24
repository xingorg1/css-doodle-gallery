import { createApp } from 'vue'
import App from './App.vue'
import Axe from 'axe-ui'
import 'axe-ui/dist/axe.css'
// import CSSDoodle from 'css-doodle'
// console.log(CSSDoodle)
import 'css-doodle'
const app = createApp(App)
app.use(Axe)
// app.use(CSSDoodle)
app.mount('#app')
