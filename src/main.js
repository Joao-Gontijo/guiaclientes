import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({ //criando um novo projeto vue e está dizendo que o componente pai/raíz é o componente app (app.vue) e montando o aplicativo vue na tag app (div no html)
  render: h => h(App),
}).$mount('#app')
