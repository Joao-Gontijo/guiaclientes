<template>
  <div id="app">
    <h3>Cadastro: </h3>
    <input type="text" placeholder="Nome" v-model="campoNome"> <br>
    <input type="text" placeholder="Email" v-model="campoEmail"> <br>
    <input type="number" placeholder="Idade" v-model="campoIdade"> <br>
    <button @click="cadastrarUsuario">Cadastrar</button>
    <hr>
    <div v-for="(cliente,index) in clientes" :key="cliente.id">
      <h4>{{index+1}}</h4>
      <Cliente :cliente="cliente"/>
      
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
      campoNome: "",
      campoEmail: "",
      campoIdade: "",
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
  },
  methods: {
    cadastrarUsuario: function(){
      this.clientes.push({
        nome: this.campoNome,
        email: this.campoEmail,
        idade: this.campoIdade,
        id: Date.now()
      });
      this.campoNome = "";
      this.campoEmail= "";
      this.campoIdade= 0;
    }
  }
}
</script>

<style>
</style>
