<template>
  <div id="app">

    <div class="buttons">
  <button class="button is-primary">Primary</button>
  <button class="button is-link">Link</button>
</div>

<div class="buttons">
<button class="button is-info">Info</button>
  <button class="button is-success">Success</button>
  <button class="button is-warning">Warning</button>
  <button class="button is-danger">Danger</button>
</div>
    
    <h3>Cadastro: </h3>
    <small id="nomeErro" v-show="deuErro"> Nome inválido </small><br>
    <input required type="text" placeholder="Nome" v-model="campoNome"> <br>
    <input type="text" placeholder="Email" v-model="campoEmail"> <br>
    <input type="number" placeholder="Idade" v-model="campoIdade"> <br>
    <button @click="cadastrarUsuario">Cadastrar</button>
    <hr>
    <div v-for="(cliente,index) in orderClientes" :key="cliente.id">
      <h4>{{index+1}}</h4>
      <Cliente :cliente="cliente" @meDelete="deletarUsuario($event)"/>
      
      </div>
    
    </div>
</template>

<script>
import _ from "lodash";
import Cliente from "./components/Cliente"
// import Produto from "./components/Produto"
export default {
  name: 'App',
  data(){
    return{
      deuErro: false,
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
      if(this.campoNome == "" || this.campoNome == " " || this.campoNome.length < 3){
        this.deuErro = true;
      } else {
        this.clientes.push({
        nome: this.campoNome,
        email: this.campoEmail,
        idade: this.campoIdade,
        id: Date.now()
        });
      this.campoNome = "";
      this.campoEmail= "";
      this.campoIdade= 0;
      this.deuErro = false;
      }
    },
    deletarUsuario: function($event){
      console.log("recebendo evento");
      console.log($event.idDoCliente);
      var id = $event.idDoCliente; //pegando o id do cliente
      var novoArray = this.clientes.filter(cliente => cliente.id != id);  //colocar um filtro que é uma função que recebe uma regra, 
      this.clientes = novoArray;                                          //no caso, para cada cliente dentro do array ele vai aplicar a regrar e retornar um novo array
    }
  },
  computed:{
    orderClientes: function() {
      return _.orderBy(this.clientes,['nome'],['asc']);
    }
  }
}
</script>

<style>
  #nomeErro{
    color: red;
  };
</style>
