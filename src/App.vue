<template>
  <div id="app">
    <Cliente/>
    <div v-for="(cliente,index) in clientes" :key="cliente.id">
      <h4>{{index+1}}</h4>
      <Cliente :cliente="cliente"/>
      <hr>
      <h4>Edição: </h4>
      <input type="text" v-model="cliente.nome">
      <input type="text" v-model="cliente.email">
      </div>
    
    </div>
</template>

<script>
import Cliente from "./components/Cliente"
// import Produto from "./components/Produto"
export default {
  name: 'App',
  data(){
    return{
      clientes: [
        {
          id: 1,
          nome: "João",
          email: "joao@email.com",
          idade: 20
      },{
          id: 2,
          nome: "Ana",
          email: "ana@email.com",
          idade: 18
      }]
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
