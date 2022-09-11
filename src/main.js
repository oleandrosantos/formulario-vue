import { createApp } from 'vue'
import App from './App.vue'
import moment from 'moment'
import Maska from 'maska'

const app = createApp(App);
//Adicionando o puglin maska ao vue
app.use(Maska);

//Criando a variavel global
app.config.globalProperties.$moment = moment;
//Usando dados em pt-br
app.config.globalProperties.$moment.locale('pt-br');


app.mount('#app');
