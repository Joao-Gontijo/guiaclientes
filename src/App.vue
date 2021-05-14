<template>
  <div id="app">
    <input type="text" v-model="clienteJoao.nome" placeholder="Nome" >
    <Cliente :cliente="clienteJoao" :showIdade="true"/>
    <Cliente :cliente="clienteAna"/>
  </div>
</template>

<script>
import Cliente from "./components/Cliente"
// import Produto from "./components/Produto"
export default {
  name: 'App',
  data(){
    return{
      clienteJoao:{
        nome: "João",
        email: "joao@email.com",
        idade: 20
      },
      clienteAna:{
        nome: "Ana",
        email: "ana@email.com",
        idade: 18
      }
    }
  },
  components: {
    Cliente,
    // Produto
  }
}
</script>

<style>
</style>
